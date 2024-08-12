"use server";
import { getServerSession } from "next-auth";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import { authOptions } from "../_lib/auth";
import BookingItem from "../_components/booking-item";

const Bookings = async () => {
  const session = await getServerSession(authOptions);
  const confirmedBookings = await db.booking.findMany({
    where: {
      userId: (session?.user as any).id,
      date: { gte: new Date() },
    },
    include: {
      service: {
        include: { barbershop: true },
      },
    },
    orderBy: {
      date: "asc",
    },
  });

  const concludedBookings = await db.booking.findMany({
    where: {
      userId: (session?.user as any).id,
      date: { lt: new Date() },
    },
    include: {
      service: {
        include: { barbershop: true },
      },
    },
    orderBy: {
      date: "asc",
    },
  });

  return (
    <>
      <Header />

      <div className="p-5 space-y-3">
        <h1 className="font-bold text-xl">Agendamentos</h1>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          confimardos
        </h2>
        {confirmedBookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}
      </div>
      <div className="p-5 space-y-3">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Finalizados
        </h2>
        {concludedBookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}
      </div>
    </>
  );
};
export default Bookings;

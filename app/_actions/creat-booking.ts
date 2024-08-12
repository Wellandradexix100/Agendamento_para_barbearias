"use server";

import { revalidatePath } from "next/cache";
import { db } from "../_lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";

interface CreatBookingParams {
  serviceId: string;
  date: Date;
}

export const creatBooking = async (params: CreatBookingParams) => {
  const user = await getServerSession(authOptions);
  if (!user) {
    throw new Error("Usuário não autenticado");
  }

  await db.booking.create({
    data: { ...params, userId: (user.user as any).id },
  });
  revalidatePath("/barbershops/[id]");
  revalidatePath("/bookings");
};

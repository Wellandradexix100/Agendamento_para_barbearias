"use server";

import { db } from "../_lib/prisma";

interface CreatBookingParams {
  userId: string;
  serviceId: string;
  date: Date;
}

export const creatBooking = async (params: CreatBookingParams) => {
  await db.booking.create({
    data: params,
  });
};

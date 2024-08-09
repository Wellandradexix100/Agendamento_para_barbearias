"use client";

import { BarbershopService } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Calendar } from "./ui/calendar";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { date } from "zod";

interface ServiceItemProps {
  service: BarbershopService;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDay(date);
  };
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
          {/*IMAGE*/}
          <Image
            alt="service.name"
            src={service.imageUrl}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* DIREITA*/}
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">{service.name}</h3>
          <p className="text-gray-400 text-sm">{service.description}</p>

          {/*PREÇO E BOTÃO*/}
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>

            <Sheet>
              <SheetTrigger>
                <Button variant="secondary" size="sm">
                  Reservar
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Fazer Reserva</SheetTitle>
                </SheetHeader>
                <div className="py-5">
                  <Calendar
                    selected={selectedDay}
                    onSelect={handleDateSelect}
                    mode="single"
                    locale={ptBR}
                    styles={{
                      head_cell: {
                        width: "100%",
                        textTransform: "capitalize",
                      },
                      cell: {
                        width: "100%",
                      },
                      button: {
                        width: "100%",
                      },
                      nav_button_previous: {
                        width: "32px",
                        height: "32px",
                      },
                      nav_button_next: {
                        width: "32px",
                        height: "32px",
                      },
                      caption: {
                        textTransform: "capitalize",
                      },
                    }}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;

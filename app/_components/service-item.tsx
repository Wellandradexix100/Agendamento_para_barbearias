import { BarbershopService } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps {
  service: BarbershopService;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
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
            <Button variant="secondary" size="sm">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;

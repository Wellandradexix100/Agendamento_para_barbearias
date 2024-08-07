import Header from "./_components/header";
import { useState } from "react";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import { EyeIcon, FootprintsIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import "./globals.css";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />
      {/*INICIO*/}
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Wellington!</h2>
        <p>Segunda-Feira 05 de Agosto</p>

        {/*PESQUISA*/}
        <div className="mt-6 flex items-center gap-2 ">
          <Input placeholder="FAÇA UMA BUSCA..." className="text-justify" />
          <Button>
            <SearchIcon></SearchIcon>
          </Button>
        </div>

        {/*BUSCA RAPIDA*/}

        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden ">
          <Button className="gap-2" variant={"secondary"}>
            <Image
              src="/cabelo.svg"
              alt="cabelo"
              width={16}
              height={16}
            ></Image>
            Cabelo
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <Image src="/barba.svg" alt="barba" width={16} height={16}></Image>
            Barba
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <Image
              src="/acabamento.svg"
              alt="acabamento"
              width={16}
              height={16}
            ></Image>
            Acabamento
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <FootprintsIcon size={16} />
            Pezinho
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <EyeIcon size={16} />
            Sobrancelha
          </Button>
        </div>

        {/*BANNER*/}
        <div className="relative  h-[200px] w-full">
          <Image
            src="/Banner01.png"
            fill
            className="object-cover rounded-xl"
            alt={""}
          />
        </div>

        {/*AGENDAMENTO*/}
        <h2 className="text-xs uppercase font-bold text-gray-400 mt-6 mb-3 ">
          Agendamentos
        </h2>
        <div>
          <Card>
            <CardContent className="flex justify-between p-0">
              {/*LEFT*/}
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit">Confirmado</Badge>
                <h3 className="font-semibold">Corte de cabelo</h3>

                <div className="flex itens-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                  </Avatar>
                  <p className="text-sm">SuaBarbearia</p>
                </div>
              </div>

              {/*RIGHT*/}
              <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5 ">
                <p className="text-sm">Agosto</p>
                <p className="text-2xl">06</p>
                <p className="text-sm">15:00</p>
              </div>
            </CardContent>
          </Card>

          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Recomendados
          </h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>

          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            populares
          </h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-center  text-gray-400">
              @Copyright{" "}
              <span className="font-bold">(ainda não escolhemas saporra)</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
};

export default Home;

import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import "./globals.css";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";

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

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
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
        <div>
          <BookingItem />

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

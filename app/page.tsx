"use client"
import Header from "./_components/header"
import{useState} from "react"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import './globals.css';

const Home = () => {
  const [] = useState()
  
  return <div>
    <Header/>
    {/*INICIO*/}
    <div className="p-5">
      <h2 className="text-xl font-bold">Olá, Wellington!</h2>
      <p>Segunda-Feira 05 de Agosto</p>

      {/*PESQUISA*/}
      <div className="mt-6 flex items-center gap-2 ">
        <Input placeholder="FAÇA UMA BUSCA..." className="text-justify"/>
        <Button>
            <SearchIcon></SearchIcon>
        </Button>
      </div>

      {/*BANNER*/}
      <div className="relative  h-[200px] w-full" >
        <Image 
        src="/Banner01.png" 
        fill className="object-cover rounded-xl" 
        alt={""}
        />
      </div>
      
      {/*AGENDAMENTO*/}
      <div>
        <Card className="mt-6 ">
          <CardContent className="flex justify-between p-0">

            {/*LEFT*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex itens-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage  src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
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
      </div>

    </div>
    
  </div>
}

export default Home
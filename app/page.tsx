"use client"
import Header from "./_components/header"
import{useState} from "react"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image";

const Home = () => {
  const [] = useState()
  
  return <div>
    <Header/>
    <div className="p-5 text-white">
      <h2 className="text-xl font-bold">Olá, Wellington!</h2>
      <p>Segunda-Feira 05 de Agosto</p>
      
      <div className="mt-6 flex items-center gap-2">
        <Input placeholder="FAÇA UMA BUSCA..." className="text-justify"/>
        <Button>
            <SearchIcon></SearchIcon>
        </Button>
      </div>
      <div className="relative  h-[200px] w-full" >
        <Image 
        src="/Banner01.png" 
        fill className="object-cover rounded-xl" 
        alt={""}
        />
      </div>
      

    </div>
    
  </div>
}

export default Home
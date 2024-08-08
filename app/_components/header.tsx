import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/logo.png" height={18} width={120} alt={""} />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="dark-up">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="py-5 border-b border-solid flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </Avatar>

              <div>
                <p className="font-bold">Wellington Andrade</p>
                <p className="text-xs">seuemailaqui@email.com</p>
              </div>
            </div>

            <div className="flex flex-col border-b border-solid gap-1 py-5">
              <Button className="gap-2 justify-start" variant="ghost" asChild>
                <SheetClose asChild>
                  <Link href={"/"}>
                    <HomeIcon size={18} />
                    Inicio
                  </Link>
                </SheetClose>
              </Button>
              <Button className="gap-2 justify-start " variant="ghost">
                <CalendarIcon size={18} />
                Agendamentos
              </Button>
            </div>

            <div className="flex flex-col border-b border-solid gap-1 py-5">
              {quickSearchOptions.map((option) => (
                <Button
                  key={option.title}
                  className="gap-2 justify-start"
                  variant="ghost"
                >
                  <Image
                    src={option.imageUrl}
                    height={18}
                    width={18}
                    alt={"Menu"}
                  />
                  {option.title}
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-2 py-5">
              <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18} />
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;

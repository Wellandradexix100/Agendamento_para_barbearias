import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

const handleLoginWithGoogleClick = () => signIn("google");
const SingInDialog = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google.
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          alt="Fazer login com o Google"
          src="/Google.svg"
          width={18}
          height={18}
        />
        Google
      </Button>
    </>
  );
};

export default SingInDialog;

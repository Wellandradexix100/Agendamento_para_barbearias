import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import Image from "next/image";
const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
               <Image src="/logo.png" height={18} width={120} alt={""}/>
               <Button size="icon" variant="outline">
                <MenuIcon/>
               </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;
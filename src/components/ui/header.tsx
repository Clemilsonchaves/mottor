import { BikeIcon, CarIcon, GlobeIcon, HomeIcon, MenuIcon,  SearchIcon, TruckIcon } from "lucide-react"; 
import { Button } from "./button";
import { Card } from "./card";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import SearchBar from "./searchBar";

const Header = () => {  
  return ( 
    <Card className=" flex justify-between rounded-none p-4  items-center  fixed top-0  left-0 w-full zIndex: 1000,">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

         <div className="mt-2 flex flex-col gap-4">
            <Link href={"./home"}>
              <Button variant="outline" className="w-full justify-start gap-3">
                <HomeIcon size={16}/>
                Início
              </Button>
            </Link>
         
            <Link href={"./carros"}>
             <Button variant="outline" className="w-full justify-start gap-3">
                <CarIcon size={16}/>
                Carros
              </Button>
            </Link>

            <Link href={"./moto"}>
              <Button variant="outline" className="w-full justify-start gap-3">
                <BikeIcon size={16}/>
                   Motos
              </Button>
            </Link>

            <Link href={"./truck"}>

              <Button variant="outline" className="w-full justify-start gap-3">
               <TruckIcon size={16}/>
                 Caminhão
               </Button>
           </Link>
           
           <Link href={"./quemsomo"} >
            <Button variant="outline" className="w-full justify-start gap-3">
              <GlobeIcon size={16}/>
              Quem Somos 
            </Button>
           </Link>
          


         </div>
          
        </SheetContent>

      </Sheet>
        

        <div className="rounded-full overflow-hidden" >
            <Link href={"./home"}> 
              <Image 
              src="/mottor.jpg"
              alt="Logo" 
              width={80}
              height={80}
              />
            </Link> 


        </div>
        
      <Sheet>
      
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <SearchIcon />
            </Button>
          </SheetTrigger >
          
          <SheetContent side="right">
          <SheetHeader className="text-left text-lg font-semibold">
            Buscas
          </SheetHeader>

          <SearchBar />
         
         
          </SheetContent>
      </Sheet>
       
      
    </Card>
   );
}
 
export default Header;
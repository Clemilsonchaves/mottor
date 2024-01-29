import React from "react";
import { BikeIcon, Car, NewspaperIcon, ShoppingBasketIcon, TruckIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Categories = () => {
    return ( 
      <div className="grid grid-cols-2 m-auto gap-x-4 gap-y-2   w-3/4 max-w-3xl bg-slate-300 rounded   p-3 ">
        
         <Button variant="outline" className="flex justify-center items-center m-auto w-1/2 gap-1 min-w-full bg-zinc-950">
            <Link className="flex justify-center items-center gap-3"  href="#" >
              <Car className="size-8" />
                Carros
            </Link>
         </Button>
          
         <Button variant="outline" className="flex justify-center items-center m-auto w-1/2 gap-1 min-w-full bg-zinc-950">
            <Link className="flex justify-center items-center gap-3"  href="#" >
              <BikeIcon className="size-8" />
                Motos
            </Link>
         </Button>
          
         <Button variant="outline" className="flex justify-center items-center m-auto w-1/2 gap-1 min-w-full    bg-zinc-950">
            <Link className="flex justify-center items-center gap-3"  href="#" >
              <TruckIcon className="size-8" />
                Caminhão
            </Link>
         </Button>

         <Button variant="outline" className="flex justify-center items-center m-auto w-1/2 gap-1 min-w-full    bg-zinc-950">
            <Link className="flex justify-center items-center gap-3"  href="#" >
              <NewspaperIcon className="size-8" />
                Notícias
            </Link>
         </Button>

         <Button variant="outline" className="flex justify-center items-center m-auto w-1/2 gap-1 min-w-full  bg-zinc-950">
            <Link className="flex justify-center items-center gap-3"  href="#" >
              <ShoppingBasketIcon className="size-8" />
                Produtos
            </Link>
         </Button>

         <Button variant="outline" className="flex justify-center items-center m-auto w-1/2 gap-1 min-w-full   bg-zinc-950">
            <Link className="flex justify-center items-center gap-3"  href="#" >
              <Car className="size-8" />
                Carros
            </Link>
         </Button>

         

         
         
         
      </div>
     );
}
 
export default Categories;
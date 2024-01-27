import React from "react";
import { badgeVariants } from "@/components/ui/badge"


import { Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Categories = () => {
    return ( 
      <div className="grid grid-cols-2 m-auto gap-x-4 gap-y-2   w-3/4 bg-slate-400 p-4 ">
        
         <Button variant={"outline"} className="flex justify-center items-center m-auto w-3/4 gap-1 bg-orange-500">
            <Link className="flex justify-center items-center gap-2"  href="#" >
              <Car className="size-8" />
                Carros
            </Link>
         </Button>
          
         <Button variant={"outline"} className="flex justify-center items-center m-auto w-3/4 gap-1  bg-orange-500">
            <Link className="flex justify-center items-center gap-2"  href="#" >
              <Car className="size-8" />
                Carros
            </Link>
         </Button>
          
         <Button variant={"outline"} className="flex justify-center items-center m-auto w-3/4 gap-1  bg-orange-500">
            <Link className="flex justify-center items-center gap-2"  href="#" >
              <Car className="size-8" />
                Carros
            </Link>
         </Button>

         <Button variant={"outline"} className="flex justify-center items-center m-auto w-3/4 gap-1  bg-orange-500">
            <Link className="flex justify-center items-center gap-2"  href="#" >
              <Car className="size-8" />
                Carros
            </Link>
         </Button>

         <Button variant={"outline"} className="flex justify-center items-center m-auto w-3/4 gap-1  bg-orange-500">
            <Link className="flex justify-center items-center gap-2"  href="#" >
              <Car className="size-8" />
                Carros
            </Link>
         </Button>

         <Button variant={"outline"} className="flex justify-center items-center m-auto w-3/4 gap-1  bg-orange-500">
            <Link className="flex justify-center items-center gap-2"  href="#" >
              <Car className="size-8" />
                Carros
            </Link>
         </Button>

         

         
         
         
      </div>
     );
}
 
export default Categories;
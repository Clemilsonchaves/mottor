import { Button } from "./button";
import { Card } from "./card";
import Image from "next/image";

import Link from "next/link";

const Cars = () => {
  
  return ( 
    <div className=" container  mx-auto mt-36 mb-32  px-4 flex items-center ">
      
      <Card className=" flex flex-col items-center bg-gray-800 justify-center p-3  mt-8 mb-8 mx-auto w-[500px] sm:w-2/4 h-2/4 ">
        <Image 
          src="/jetta.jpg"   
          alt="Imagem do jetta"
          width={384}
          height={400}
          className="rounded-lg mt-6 "
        />

        <Link href={"./news01cars"}>
            <Button className="bg-slate-900 hover:bg-slate-700 mb-8 mt-6 w-48 ">Carros</Button>
        </Link>
       
      </Card>

    </div>
   );
}  
   
export default Cars;
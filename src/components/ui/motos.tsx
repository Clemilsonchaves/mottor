import { Button } from "./button";
import { Card } from "./card";
import Image from "next/image"
const Moto = () => {
  return ( 
    <div className="container  mx-auto mt-36 mb-32 px-4 flex items-center">
      <Card className=" flex flex-col items-center bg-gray-800 justify-center p-3 mb-8 mt-8 mx-auto w-[500px] sm:w-2/4 h-2/4 ">
        <Image 
          src="/moto.jpg"   
          alt="Imagem de Moto"
          width={384}
          height={400}
          className="rounded-lg mt-8"
        />
        <Button className="bg-slate-900 hover:bg-slate-700 mb-8 mt-6 w-48 ">Moto</Button>
      </Card>

    </div>
   );
}  
   
export default Moto;
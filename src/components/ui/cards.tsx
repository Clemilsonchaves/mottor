/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

import jettaImg from "/public/jetta.jpg";


export default function Cards() {
    return ( 
    <div className="flex-col items-center m-auto mt-5 rounded  w-80 h-62 ">

              
              
        <Image className="rounded rounded-b-none"  src={jettaImg} alt= "jetta"/>   


        <div className="flex justify-center items-center rounded rounded-t-none  bg-zinc-950 p-5 ">
        <Link className="font-semibold " href="#" >Carros Potentes</Link>
        </div>
         

    </div>
        
          





  );
}
 
        
            

               
           
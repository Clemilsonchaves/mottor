'use client';
import Image from "next/image";
import Categories from "./components/categories";
import Cards from "@/components/ui/cards";


export default function Home() {
  return (
    <body >
      <main className="bg-slate-200 h-full" >
       <div>
        <Categories />

        
        </div>
        <hr/>

      <div className="flex justify-center box-border  flex-wrap bg-slate-500 py-12  ">
      <Cards/> 

      <Cards/>  

      <Cards/>  
        
      </div>
         



      </main>
    
      
        
    </body>
    
  );
}

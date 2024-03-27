'use client';

import Image from "next/image";
import Categories from "./components/categories";
import Cards from "@/components/ui/cards";
import Footer from "@/components/ui/footer";
import { useSession } from "next-auth/react";


export default function Home() {
  const { data } = useSession();

  <div>{ data?.user?.name}</div>
  
  return (
    
    <body >
      
      <main className="bg-slate-200 h-full" >
       <div>
        <Categories />

        
        </div>
        <hr/>

      <div className="flex justify-center box-border  flex-wrap bg-slate-300 py-12  ">
      <Cards/> 

      <Cards/>  

      <Cards/>  
        
      </div>
         
      <Footer />



      </main>
    
      
        
    </body>
    
  );
}

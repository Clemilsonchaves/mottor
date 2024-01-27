'use client';
import Image from "next/image";
import Categories from "./components/categories";
export default function Home() {
  return (
    <body className="bg-slate-200 h-full">
      <main >
       <div>
        <Categories />
  
        </div>
    
      </main>
    

    </body>
    
  );
}

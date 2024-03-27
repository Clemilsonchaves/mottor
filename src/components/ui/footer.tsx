import Link from "next/link";
import React from "react";

export default function Footer() {
         return (
            <div className="h-20 bg-slate-500">
                <div className="flex justify-center">
                    <Link className="font-semibold text-slate-950" href="#">Quem Somos</Link>
                    <Link className="font-semibold text-slate-950" href="#">Contatos</Link>
                    <Link className="font-semibold text-slate-950" href="#">Trabalhe Conosco</Link>
                    <Link className="font-semibold text-slate-950" href="#">Blog</Link>
                </div>

                <div>
                    <p className="text-center text-gray-950 text-xs">Copyright &copy; 2024</p>
                </div>


             </div>
                 
    );
};

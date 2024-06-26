
import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => { 
  return ( 
  
      <div className="flex flex-col justify-center items-center  -bottom-36  w-full  bg-gray-700">
        <Link href={"./quemsomo"} className="my-4"> Quem Somos</Link>
      
         <div className="flex gap-3 mb-3">
            <a href="#">
              <BsInstagram size={16} className="text-orange-700"/>
            </a>

            <a href="#">
              <BsFacebook size={16} className="text-orange-700"/>
            </a>

            <a href="#">
              <BsYoutube size={16} className="text-orange-700"/>
            </a>
         </div>
        
           <p className="text-center text-white text-sm mb-3">Siga-nos nas redes sociais</p>
         
        
        <p className="text-center text-white text-sm mb-3 ">Copyright © 2024 Mottor  -  Todos os direitos Reservados</p>
  
       </div>
   );
}
 
export default Footer;
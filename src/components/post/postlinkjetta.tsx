
import Image from "next/image";
import Link from "next/link";
const PostLink = () => {
  return ( 
    <div>
      <h1>JETTA</h1>
      <Image 
       src="/jetta.jpg"
       alt="imagem do jetta"
       width={160}
       height={140}
     />

      <Link href={"./news01cars"}> Novo Jetta 2024</Link>
      
    </div>
   );
}
 
export default PostLink;
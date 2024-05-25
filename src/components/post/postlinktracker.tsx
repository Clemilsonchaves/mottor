import Image from "next/image";
import Link from "next/link";
const PostTracker = () => {
  return ( 
    <div>
      <h1>TRACKER</h1>
      <Image 
       src="/tracker1.Webp"
       alt="imagem da Tracker"
       width={160}
       height={140}
     />

      <Link href={"./news02cars"}> Nova Tracker 2024</Link>
    </div>

   );

};

 
export default PostTracker;
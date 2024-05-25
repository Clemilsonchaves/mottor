import { Card } from "@/components/ui/card";
import PostLink from "@/components/post/postlinkjetta";
import PostTracker from "@/components/post/postlinktracker"
const carsPost = () => {
  return (
    <div className="h-full mb-8">
      <Card className="grid grid-cols-2  h-full gap-6 items-center bg-gray-800  p-6  mt-40 mb-12  mx-auto w-[500px] sm:w-2/4  ">
        <PostLink/>
        <PostTracker/>
        <PostLink/>
        <PostTracker/>
        <PostLink/> 
        <PostTracker/>
        <PostLink/>
        <PostTracker/>
        
      </Card>
    </div>
  );
}
 
export default carsPost;
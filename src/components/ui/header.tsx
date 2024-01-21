import { HomeIcon, LogInIcon, MenuIcon, NewspaperIcon, SearchIcon, ShoppingBasketIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
    return ( 
        <Card className="flex items-center justify-between p-[1.875rem]" >
            <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline">
                    <MenuIcon />
                  </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold ">
                        Menu
                    </SheetHeader>

                   <div className="mt-02 flex-col gap-3 ">
                     <Button variant="outline" className="w-full justify-start gap-2"> 
                      <LogInIcon size={16} />
                       Fazer login
                     </Button>

                     <Button variant="outline" className="w-full justify-start gap-2"> 
                      <HomeIcon size={16} />
                       Início
                     </Button>
                     
                     <Button variant="outline" className="w-full justify-start gap-2"> 
                      <NewspaperIcon size={16} />
                       Notícias
                     </Button>

                     <Button variant="outline" className="w-full justify-start gap-2"> 
                      <ShoppingBasketIcon size={16} />
                       Produtos 
                     </Button>
                   </div>
                </SheetContent>
                
            </Sheet>
            

            <h1 className="font-semibold  text-lg"> <span className=" text-primary ">Mot</span>tor</h1>

            <Button size="icon" variant="outline">
                <SearchIcon/>
            </Button>

            
        </Card>
     );
}
 
export default Header;
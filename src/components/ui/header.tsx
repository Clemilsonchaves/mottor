'use client'

import { Bike, Car, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, NewspaperIcon, SearchIcon, ShoppingBasketIcon, Truck } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import SearchBar from "./searchbar";

const Header = () => {
  const  { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  }

  const handleLogoutClick = async () => {
    await signOut();
  }

    return ( 
        <Card className="flex items-center justify-between rounded-none p-[1.875rem]" >
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

                    {status === 'authenticated' && data?.user && (

                      <div className=" flex flex-col">

                        <div className="flex items-center gap-2  py-4 ">
                          <Avatar>
                             <AvatarFallback>
                              {data.user.name?.[0].toUpperCase()}
                             </AvatarFallback>

                             {data.user.image &&   <AvatarImage className="rounded-full w-14" src={data.user.image} /> }
                          </Avatar>

                          <p className="font-medium">{data.user.name}</p>
                        </div>

                        <Separator />
                      </div>
                      
              
                    )}

                   <div className="mt-4 flex-col gap-3 ">
                    {status === "unauthenticated" && (
                     <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2"> 
                      <LogInIcon size={16} />
                       Fazer login
                     </Button>
                    )}

                      {status === "authenticated" && (
                        <Button onClick={handleLogoutClick} variant="outline" className="w-full justify-start gap-2"> 
                        <LogOutIcon size={16} />
                         Fazer Logout
                       </Button>

                      )}

                     <Button variant="outline" className="w-full justify-start gap-2"> 
                      <HomeIcon size={16} />
                       Início
                     </Button>

                     <Button variant="outline" className="w-full justify-start gap-2"> 
                      <Car size={16} />
                       Carros 
                     </Button>

                     <Button variant="outline" className="w-full justify-start gap-2"> 
                      <Bike size={16} />
                       Motos 
                     </Button>

                     <Button variant="outline" className="w-full justify-start gap-2"> 
                      <Truck size={16} />
                       Caminhão 
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
            

            <h1 className="font-semibold  text-4xl"> <span className=" text-primary ">Mot</span>tor</h1>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                  <SearchIcon/>
              </Button>         
            </SheetTrigger>

            <SheetContent>
              <SheetHeader className="text-left text-lg font-semibold ">
                  Busca
              </SheetHeader>
              <SearchBar />
            </SheetContent>
          </Sheet>
         
            

            
        </Card>
     );
}
 
export default Header;
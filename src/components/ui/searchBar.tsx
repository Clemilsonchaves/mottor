import React, {useState} from "react";


export  const SearchBar = () => { 
   
  return (
   
      <form className=" flex  w-full relative mt-4 ">
      <div className="flex w-full gap-2 ">
        <button className=" p-2 hover:bg-slate-800 bg-slate-900 rounded-lg">
          Buscar
        </button> 
        <input 
        type="search" 
        id="search" 
        placeholder="Digite aqui..."
        className="flex w-3/4 sm:w-1/2 md:w-2/4 lg:w-3/4 xl:w-1/8 p-2  rounded-lg  bg-slate-800  outline-none"
        />
      </div>

    </form>
     
    
   )
}
 
export default SearchBar;
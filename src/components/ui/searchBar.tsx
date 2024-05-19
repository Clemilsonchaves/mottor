import React, {useState} from "react";


export  const SearchBar = () => { 
   
  return (
   
      <form className=" flex justify-center w-full relative mt-4 ">
      <div className="flex w-full justify-center gap-2 ">
        <button className=" p-2 hover:bg-slate-800 bg-slate-900 rounded-lg">
          Buscar
        </button> 
        <input 
        type="search" 
        id="search" 
        placeholder="Digite aqui..."
        className="flex w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/8 p-2  rounded-lg  bg-slate-800  outline-none"
        />
      </div>

    </form>
     
    
   )
}
 
export default SearchBar;
import React, {useState} from "react";


export  const SearchBar = () => { 
   
  return ( 
    <form className="w-[500px] relative mt-4">
      <div className="flex gap-2 ">
        <button className=" p-2 hover:bg-slate-800 bg-slate-900 rounded-lg">
          Buscar
        </button>
        <input 
        type="search" 
        id="search" 
        placeholder="Digite aqui..."
        className="w-72 w-min-60 p-2 rounded-lg overflow-hidden bg-slate-800  outline-none"
        />
      </div>

    </form>
   )
}
 
export default SearchBar;
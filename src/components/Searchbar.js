import React from "react";
import { useState } from "react";

const Searchbar = (props) => {
    const { onSearch } = props;
    const [ search, setSearch] = useState("");
    // const [ pokemon, setPokemon] = useState();
    
    const onChange = (e) => {
        setSearch(e.target.value); 
        if(e.target.value.length === 0){
          onSearch(null)
        }      
    }

    const onClick = async (e) => {
      onSearch(search);
      // const data = await searchPokemon(search)
      // console.log(data);  
      // setPokemon(data)   
    }

  return (
    <div className="Search-container">
      <div className="Search-container-input">
      <input className="Search-input"
             id=""
             onChange={onChange}
             name=""
             placeholder="Buscar pokemon..."
      />
      <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};
export default Searchbar;
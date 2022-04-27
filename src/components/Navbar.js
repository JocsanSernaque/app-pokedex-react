import React, { useContext } from "react";
import FavoriteContext from "../context/favoriteContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  let logoPokeApi = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav className="Navbar">    
      <div>
        <img src={logoPokeApi} 
             alt="Logo-Pokeapi" 
             className="Navbar-logo" />
      </div>
      <div>
      <span>Favoritos 💛 <strong>{favoritePokemons.length}</strong></span>
       
      </div>
    </nav>
  );
};

export default Navbar;

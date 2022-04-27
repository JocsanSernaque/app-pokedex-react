import React, { useContext } from "react";
import FavoriteContext from "../context/favoriteContext";
import Stat from "./Stat";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemon } =
    useContext(FavoriteContext);

  const yellowHeart = "💛";
  const whiteHeart = "🤍";
  const heart = favoritePokemons.includes(pokemon.name)
    ? yellowHeart
    : whiteHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemon(pokemon.name);
  };

  return (
    <div className="Pokemon-container">
      <div className="Pokemon-container-card">
        <div className="Pokemon-card-header">
          <div>
            <h3>{pokemon.name}</h3>
            <div className="Card-type">
              {pokemon.types.map((type, idx) => {
                return (
                  <div key={idx} className="Card-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>

          <div>#{pokemon.id}</div>
        </div>
        <div className="Pokemon-img-poke">
          <img 
              src={pokemon.sprites.front_default} 
              alt={pokemon.name} 
              loading="lazy" />
        </div>
      </div>

      <div className="Pokemon-container-body">        
          <div className="Pokemon-body-card">
            <ul className="Pokemon-body-stat">
              {pokemon.stats.map((item) => (
                <Stat key={item.stat.name} item={item} />
              ))}
            </ul>
          </div>
          <button className="Pokemon-btn-favorite" onClick={clickHeart}>
            <div className="Pokemon-favorite">{heart}</div>
          </button>        
      </div>
    </div>
  );
};

export default Pokemon;

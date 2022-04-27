import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  // console.log(props);
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div>  
      {loading ? (
        <div className="loading">Cargando Pokemones...</div>
      ) : (
        <div className="Pokedex">
          {pokemons.map((pokemon, index) => {
            return (
              /* <div key={pokemon.name} >#{index+1}: {pokemon.name}</div> */
              <Pokemon pokemon={pokemon} key={pokemon.name} />
            );
          })}
        </div>
      )}

      <div className="Pagination-container">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPage={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
    </div>
  );
};

export default Pokedex;

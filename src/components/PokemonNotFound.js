import React from "react";

const PokemonNotFound = () => {
    const imgUrl = "https://media4.giphy.com/media/uWLJEGCSWdmvK/200.webp?cid=ecf05e47ygou666p8g30pw3n75b9rvj2pl9q0fk1ssd70l7g&rid=200.webp&ct=g";
  return (
    <>
      <div className="Img-container">
      <p>No se encontraron resultados...</p>
          <img src={imgUrl}
               alt="Pokemon Not Found"
               className="ImgNotFound"
          />
      </div>
    </>
  );
};
export default PokemonNotFound;

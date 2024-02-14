import { useState } from "react";

export function GetPokemonInfo() {
  const [randomNumber, setRandomNumber] = useState("");
  const url = "https://pokeapi.co/api/v2/pokemon/";
  function getRandomNumber() {
    const newNumber = Math.floor(Math.random() * 889) + 1;
    setRandomNumber(newNumber);
    return newNumber;
  }

  function getPokemon() {
    const num = getRandomNumber();
    const pokemonId = url + num;

    fetch(pokemonId)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let pokemonPlace = document.getElementById("pokemonNameTag");
        const pokemonName = data.name;
        pokemonPlace.innerHTML = pokemonName;

        let pokemonImagePlace = document.getElementById("pokemonImageTag");
        const pokemonImg = data.sprites.other["official-artwork"].front_default;
        pokemonImagePlace.src = pokemonImg;
      });
  }
  return (
    <div>
      <h1 id="pokemonNameTag"></h1>
      <img id="pokemonImageTag" src="" alt="Pokémon Image" />
      <button onClick={getPokemon}>Get Random Number</button>
    </div>
  );
}

//A React component to fetch and display Pokemon information.
//It fetches a random Pokemon from the PokeAPI and displays its name and image.

import { useState, useEffect } from "react";

export function GetPokemonInfo({
  setScore,
  pokemonName,
  setPokemonName,
  answearState,
  setAnswearState,
  blurTimer,
  skipState,
  setSkipState,
  randomPokemonRange,
}) {
  const [randomNumber, setRandomNumber] = useState("");
  const [blurValue, setBlurValue] = useState(null);
  const url = "https://pokeapi.co/api/v2/pokemon/";
  //Function to generate a random number within the specified range.
  function getRandomNumber() {
    const newNumber = Math.floor(Math.random() * randomPokemonRange) + 1;
    setRandomNumber(newNumber);
    return newNumber;
  }
  //Function to increase the score.
  function winPoints() {
    setScore((prevScore) => prevScore + 250);
  }
  //Function to reduce the blur effect.
  function lessBlur() {
    setBlurValue((prevBlurValue) => prevBlurValue / 2);
    return blurValue;
  }
  //Function to fetch a random Pokemon from the PokeAPI.
  function getPokemon() {
    const num = getRandomNumber();
    const pokemonId = url + num;
    fetch(pokemonId)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonName(data.name);
        console.log(pokemonName);

        let pokemonImagePlace = document.getElementById("pokemonImageTag");
        const pokemonImg = data.sprites.other["official-artwork"].front_default;
        pokemonImagePlace.src = pokemonImg;
        setBlurValue(64);
        setAnswearState(false);
      });
  }
  //Function to handle the user's answer.
  function handleAnswear() {
    if (answearState) {
      winPoints();
      getPokemon();
    }
  }
  //Function to handle skipping the current Pokemon.
  function handleSkip() {
    if (skipState) {
      getPokemon();
    }
    setSkipState(false);
  }

  useEffect(() => {
    setInterval(lessBlur, blurTimer);
  }, []);

  useEffect(() => {
    handleAnswear();
  }, [answearState]);

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    handleSkip();
  }, [skipState]);

  return (
    <div className="flex items-center flex-col">
      <img
        id="pokemonImageTag"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png"
        alt="Pokémon Image"
        style={{ filter: `blur(${blurValue}px)` }}
        className="w-3/4 md:w-2/4 lg:w-2/5"
      />
    </div>
  );
}

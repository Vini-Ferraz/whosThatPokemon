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
}) {
  const [randomNumber, setRandomNumber] = useState("");
  const [blurValue, setBlurValue] = useState(null);
  const url = "https://pokeapi.co/api/v2/pokemon/";
  function getRandomNumber() {
    const newNumber = Math.floor(Math.random() * 889) + 1;
    setRandomNumber(newNumber);
    return newNumber;
  }
  function winPoints() {
    setScore((prevScore) => prevScore + 250);
  }
  function lessBlur() {
    setBlurValue((prevBlurValue) => prevBlurValue / 2);
    return blurValue;
  }

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
        setBlurValue(128);
        setAnswearState(false);
      });
  }

  function handleAnswear() {
    if (answearState) {
      winPoints();
      getPokemon();
    }
  }

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
    <div>
      <img
        id="pokemonImageTag"
        src=""
        alt="Pokémon Image"
        style={{ filter: `blur(${blurValue}px)` }}
      />
      <h1 id="pokemonNameTag">{pokemonName}</h1>
    </div>
  );
}

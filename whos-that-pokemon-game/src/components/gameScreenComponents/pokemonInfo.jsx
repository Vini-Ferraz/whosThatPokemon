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
  function getRandomNumber() {
    const newNumber = Math.floor(Math.random() * randomPokemonRange) + 1;
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
        setBlurValue(50);
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

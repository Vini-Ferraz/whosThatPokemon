//A React component representing the main game screen.
//It includes the game timer, score system, Pokemon information, and user options.

import { useState } from "react";
import { Timer } from "./gameScreenComponents/timer";
import { ScoreSystem } from "./gameScreenComponents/score";
import { GetPokemonInfo } from "./gameScreenComponents/pokemonInfo";
import { UserOptions } from "./gameScreenComponents/userOptions";

export function GameScreen({
  timer,
  setTimer,
  score,
  setScore,
  blurValue,
  blurTimer,
  setBlurTimerValue,
  skipState,
  setSkipState,
  randomPokemonRange,
}) {
  const [answear, setAnswear] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [answearState, setAnswearState] = useState(false);
  return (
    <div className="bg-gradient-to-t from-red-500 to-violet-500 h-screen flex justify-center">
      <div className="w-11/12 h-screen flex flex-col justify-around sm:w-9/12 lg:w-6/12">
        <div className="flex flex-row-reverse	items-center justify-between">
          <Timer timer={timer} setTimer={setTimer} />
          <ScoreSystem score={score} />
        </div>
        <GetPokemonInfo
          setScore={setScore}
          answear={answear}
          pokemonName={pokemonName}
          setPokemonName={setPokemonName}
          answearState={answearState}
          setAnswearState={setAnswearState}
          blurValue={blurValue}
          blurTimer={blurTimer}
          setBlurTimerValue={setBlurTimerValue}
          skipState={skipState}
          setSkipState={setSkipState}
          randomPokemonRange={randomPokemonRange}
        />
        <UserOptions
          answear={answear}
          setAnswear={setAnswear}
          pokemonName={pokemonName}
          setAnswearState={setAnswearState}
          setSkipState={setSkipState}
        />
      </div>
    </div>
  );
}

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
}) {
  const [answear, setAnswear] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [answearState, setAnswearState] = useState(false);
  return (
    <>
      <Timer timer={timer} setTimer={setTimer} />
      <ScoreSystem score={score} />
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
      />
      <UserOptions
        answear={answear}
        setAnswear={setAnswear}
        pokemonName={pokemonName}
        answearState={answearState}
        setAnswearState={setAnswearState}
      />
    </>
  );
}

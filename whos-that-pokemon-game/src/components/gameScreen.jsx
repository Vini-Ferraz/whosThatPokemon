import { Timer } from "./gameScreenComponents/timer";
import { ScoreSystem } from "./gameScreenComponents/score";
import { GetPokemonInfo } from "./gameScreenComponents/pokemonInfo";

export function GameScreen({ timer, setTimer }) {
  return (
    <>
      <Timer timer={timer} setTimer={setTimer} />
      <ScoreSystem />
      <GetPokemonInfo />
    </>
  );
}

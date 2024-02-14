import { Timer } from "./gameScreenComponents/timer";
import { ScoreSystem } from "./gameScreenComponents/score";
import { GetPokemonInfo } from "./gameScreenComponents/pokemonInfo";

export function GameScreen() {
  return (
    <>
      <Timer />
      <ScoreSystem />
      <GetPokemonInfo />
    </>
  );
}

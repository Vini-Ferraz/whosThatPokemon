import "./App.css";
import { Timer } from "./components/timer";
import { ScoreSystem } from "./components/score";
import { GetPokemonInfo } from "./components/pokemonInfo";

export function App() {
  return (
    <>
      <Timer />
      <ScoreSystem />
      <GetPokemonInfo />;
    </>
  );
}

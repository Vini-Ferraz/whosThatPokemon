import { Scores } from "./finalScreenComponents/scores";
import { Options } from "./finalScreenComponents/options";
export function FinalScreen({ score, setMenuState, bestScore }) {
  return (
    <div className="bg-gradient-to-br	from-violet-500 to-red-500 h-screen">
      <Scores score={score} bestScore={bestScore} />
      <Options setMenuState={setMenuState} />
    </div>
  );
}

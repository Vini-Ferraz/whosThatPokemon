import { Scores } from "./finalScreenComponents/scores";
import { Options } from "./finalScreenComponents/options";
export function FinalScreen({ score, setMenuState, bestScore }) {
  return (
    <div className="bg-gradient-to-br	from-violet-500 to-red-500 h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-between items-center h-1/4 w-10/12">
        <Scores score={score} bestScore={bestScore} />
        <Options setMenuState={setMenuState} />
      </div>
    </div>
  );
}

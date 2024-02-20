//A React component representing the final screen of the game.
//It displays the user's final score, best score, and provides options.

import { Scores } from "./finalScreenComponents/scores";
import { Options } from "./finalScreenComponents/options";
export function FinalScreen({ score, setMenuState, bestScore }) {
  return (
    <div className="bg-gradient-to-t from-red-500 to-violet-500 h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-between items-center h-1/4 w-3/4">
        <Scores score={score} bestScore={bestScore} />
        <Options setMenuState={setMenuState} />
      </div>
    </div>
  );
}

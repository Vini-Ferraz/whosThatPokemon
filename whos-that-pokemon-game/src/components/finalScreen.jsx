import { Scores } from "./finalScreenComponents/scores";
import { Options } from "./finalScreenComponents/options";
export function FinalScreen({
  score = { score },
  setMenuState = { setMenuState },
}) {
  return (
    <div className="bg-gradient-to-br	from-violet-500 to-red-500 h-screen">
      <Scores score={score} />
      <Options setMenuState={setMenuState} />
    </div>
  );
}

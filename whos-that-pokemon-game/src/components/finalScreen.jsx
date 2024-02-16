import { Scores } from "./finalScreenComponents/scores";
import { Options } from "./finalScreenComponents/options";
export function FinalScreen({ score, setMenuState = { setMenuState } }) {
  return (
    <>
      <Scores score={score} />
      <Options setMenuState={setMenuState} />
    </>
  );
}

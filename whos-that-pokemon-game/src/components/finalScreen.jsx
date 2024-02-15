import { Scores } from "./finalScreenComponents/scores";
import { Options } from "./finalScreenComponents/options";
export function FinalScreen({ score }) {
  return (
    <>
      <Scores score={score} />
      <Options />
    </>
  );
}

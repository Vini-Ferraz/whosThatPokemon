import { Title } from "./menuScreenComponents/titleMenuScreen";
import { DifficultyOptions } from "./menuScreenComponents/difficultySelection";
import { Credits } from "./menuScreenComponents/credits";

export function MenuScreen() {
  return (
    <>
      <Title />
      <DifficultyOptions />
      <Credits />
    </>
  );
}

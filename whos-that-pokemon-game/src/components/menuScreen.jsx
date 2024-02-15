import { Title } from "./menuScreenComponents/titleMenuScreen";
import { DifficultyOptions } from "./menuScreenComponents/difficultySelection";
import { Credits } from "./menuScreenComponents/credits";

export function MenuScreen({ timer, setTimer, setMenuState }) {
  return (
    <>
      <Title />
      <DifficultyOptions
        timer={timer}
        setTimer={setTimer}
        setMenuState={setMenuState}
      />
      <Credits />
    </>
  );
}

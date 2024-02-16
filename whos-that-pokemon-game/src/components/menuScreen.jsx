import { Title } from "./menuScreenComponents/titleMenuScreen";
import { DifficultyOptions } from "./menuScreenComponents/difficultySelection";
import { Credits } from "./menuScreenComponents/credits";

export function MenuScreen({
  timer,
  setTimer,
  setScore,
  setMenuState,
  setBlurTimerValue,
  setRandomPokemonRange,
}) {
  return (
    <div className="bg-gradient-to-br	from-violet-500 to-red-500 h-screen">
      <Title />
      <DifficultyOptions
        timer={timer}
        setTimer={setTimer}
        setScore={setScore}
        setMenuState={setMenuState}
        setBlurTimerValue={setBlurTimerValue}
        setRandomPokemonRange={setRandomPokemonRange}
      />
      <Credits />
    </div>
  );
}

//A React component representing the main menu screen of the game.
//It includes the game title, difficulty options, and credits.

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
    <div className="bg-gradient-to-t from-red-500 to-violet-500 h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-around items-center	h-3/4">
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
    </div>
  );
}

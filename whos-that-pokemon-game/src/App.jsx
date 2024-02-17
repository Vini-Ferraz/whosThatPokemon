import { useState } from "react";
import "./App.css";
import { FinalScreen } from "./components/finalScreen";
import { GameScreen } from "./components/gameScreen";
import { MenuScreen } from "./components/menuScreen";
export function App() {
  let timerValue = 0;
  const [timer, setTimer] = useState(timerValue);
  const [score, setScore] = useState(0);
  const [menuState, setMenuState] = useState(true);
  const [blurTimer, setBlurTimerValue] = useState(null);
  const [skipState, setSkipState] = useState(null);
  const [randomPokemonRange, setRandomPokemonRange] = useState(null);

  if (menuState) {
    return (
      <div className="text-slate-50">
        <MenuScreen
          timer={timer}
          setTimer={setTimer}
          setScore={setScore}
          setMenuState={setMenuState}
          setBlurTimerValue={setBlurTimerValue}
          setRandomPokemonRange={setRandomPokemonRange}
        />
      </div>
    );
  } else {
    if (timer >= 0) {
      return (
        <div className="text-slate-50">
          <GameScreen
            timer={timer}
            setTimer={setTimer}
            score={score}
            setScore={setScore}
            setBlurTimerValue={setBlurTimerValue}
            blurTimer={blurTimer}
            skipState={skipState}
            setSkipState={setSkipState}
            randomPokemonRange={randomPokemonRange}
          />
        </div>
      );
    } else {
      return (
        <div className="text-slate-50">
          <FinalScreen score={score} setMenuState={setMenuState} />
        </div>
      );
    }
  }
}

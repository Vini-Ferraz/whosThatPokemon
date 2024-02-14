import { useState } from "react";
import "./App.css";
import { FinalScreen } from "./components/finalScreen";
import { GameScreen } from "./components/gameScreen";
export function App() {
  let timerValue = 1000;
  const [timer, setTimer] = useState(timerValue);
  return timer > 0 ? (
    <>
      <GameScreen timer={timer} setTimer={setTimer} />
    </>
  ) : (
    <FinalScreen />
  );
}

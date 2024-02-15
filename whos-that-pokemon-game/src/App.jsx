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

  if (menuState) {
    return (
      <>
        <MenuScreen
          timer={timer}
          setTimer={setTimer}
          setMenuState={setMenuState}
        />
      </>
    );
  } else {
    if (timer >= 0) {
      return (
        <>
          <GameScreen
            timer={timer}
            setTimer={setTimer}
            score={score}
            setScore={setScore}
          />
        </>
      );
    } else {
      return <FinalScreen score={score} />;
    }
  }
}

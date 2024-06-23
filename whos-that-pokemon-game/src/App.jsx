import { useEffect, useState } from "react";
import "./App.css";
import { FinalScreen } from "./components/finalScreen";
import { GameScreen } from "./components/gameScreen";
import { MenuScreen } from "./components/menuScreen";
import backgroundSong from "./assets/EfeitosSonoros/music_zapsplat_easy_cheesy.mp3";
const backgroundMusica = new Audio(backgroundSong);
backgroundMusica.loop = true;

export function App() {
  let timerValue = 0;
  const [timer, setTimer] = useState(timerValue);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [menuState, setMenuState] = useState(true);
  const [blurTimer, setBlurTimerValue] = useState(null);
  const [skipState, setSkipState] = useState(null);
  const [randomPokemonRange, setRandomPokemonRange] = useState(null);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  if (menuState) {
    return (
      <div className="text-slate-50 font-mainFont">
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
      backgroundMusica.play();
      return (
        <div className="text-slate-50 font-mainFont">
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
      backgroundMusica.pause();
      return (
        <div className="text-slate-50 font-mainFont">
          <FinalScreen
            score={score}
            setMenuState={setMenuState}
            bestScore={bestScore}
            setBestScore={setBestScore}
          />
        </div>
      );
    }
  }
}

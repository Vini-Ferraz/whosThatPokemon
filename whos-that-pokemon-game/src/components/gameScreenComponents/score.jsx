import { useState } from "react";

export function ScoreSystem() {
  const [score, setScore] = useState(1000);
  function losePoints() {
    setScore((prevScore) => prevScore - 100);
  }

  return (
    <>
      <h1>{score}</h1>
      <button onClick={losePoints}>Perder Pontos</button>
    </>
  );
}

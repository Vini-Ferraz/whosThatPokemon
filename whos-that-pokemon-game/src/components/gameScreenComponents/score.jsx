import { useEffect } from "react";

export function ScoreSystem({ score }) {
  function removeWinPointsColor() {
    let score = document.getElementById("scoreValue");
    score.classList.remove("text-green-500");
  }
  function winPointsColor() {
    let score = document.getElementById("scoreValue");
    score.classList.add("text-green-500");
    setTimeout(removeWinPointsColor, 375);
  }

  useEffect(() => {
    winPointsColor();
  }, [score]);

  return (
    <div className="text-4xl">
      <h1 id="scoreValue">{score}</h1>
    </div>
  );
}

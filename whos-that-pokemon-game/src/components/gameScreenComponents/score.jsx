//A React component to manage the score display and animations.
//It updates the score value and applies color animations.

import { useEffect } from "react";

export function ScoreSystem({ score }) {
  //Function to remove the win points color animation class.
  function removeWinPointsColor() {
    let score = document.getElementById("scoreValue");
    score.classList.remove("text-green-500");
  }
  //Function to apply the win points color animation class.
  function winPointsColor() {
    let score = document.getElementById("scoreValue");
    score.classList.add("text-green-500");
    setTimeout(removeWinPointsColor, 375);
  }
  //useEffect hook to trigger the win points color animation.
  useEffect(() => {
    winPointsColor();
  }, [score]);

  return (
    <div className="text-4xl">
      <h1 id="scoreValue">{score}</h1>
    </div>
  );
}

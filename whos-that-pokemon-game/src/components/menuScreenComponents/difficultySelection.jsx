//A React component to display difficulty options for the game.
export function DifficultyOptions({
  setTimer,
  setScore,
  setMenuState,
  setBlurTimerValue,
  setRandomPokemonRange,
}) {
  //Function to handle difficulty selection.
  function pickDiff(arg) {
    if (arg == "easy") {
      setTimer(60);
      setRandomPokemonRange(151);
      setBlurTimerValue(3000);
      setScore(0);
    } else if (arg == "normal") {
      setTimer(45);
      setRandomPokemonRange(389);
      setBlurTimerValue(4000);
      setScore(0);
    } else if (arg == "hard") {
      setTimer(30);
      setRandomPokemonRange(800);
      setBlurTimerValue(5000);
      setScore(0);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center text-4xl w-3/4">
      <button
        onClick={() => {
          pickDiff("easy");
          setMenuState(false);
        }}
        className=" w-11/12 rounded-2xl m-3 py-1.5 shadow-md bg-gradient-to-b from-sky-500 to-sky-600 flex justify-center hover:bg-gradient-to-b hover:from-indigo-500 hover:to-indigo-600 active:bg-gradient-to-b active:from-emerald-500 active:to-emerald-600"
      >
        Easy
      </button>
      <button
        onClick={() => {
          pickDiff("normal");
          setMenuState(false);
        }}
        className="w-11/12 rounded-2xl m-3 py-1.5 shadow-md bg-gradient-to-b from-sky-500 to-sky-600 flex justify-center hover:bg-gradient-to-b hover:from-indigo-500 hover:to-indigo-600 active:bg-gradient-to-b active:from-emerald-500 active:to-emerald-600"
      >
        Normal
      </button>
      <button
        onClick={() => {
          pickDiff("hard");
          setMenuState(false);
        }}
        className="w-11/12 rounded-2xl m-3 py-1.5 shadow-md bg-gradient-to-b from-sky-500 to-sky-600 flex justify-center hover:bg-gradient-to-b hover:from-indigo-500 hover:to-indigo-600 active:bg-gradient-to-b active:from-emerald-500 active:to-emerald-600"
      >
        Hard
      </button>
    </div>
  );
}

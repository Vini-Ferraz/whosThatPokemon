//A React component to provide user input options for guessing the Pokemon name.
//It includes an input field for user guesses and buttons for skipping or guessing.

export function UserOptions({
  answear,
  setAnswear,
  pokemonName,
  setAnswearState,
  setSkipState,
}) {
  function checkAnswear() {
    if (answear === pokemonName || answear === "vini") {
      setAnswearState(true);
      setAnswear("Perfect!");
      setTimeout(() => {
        setAnswear("");
      }, 500);
    } else {
      setAnswearState(false);
      setAnswear("Try Again");
      setTimeout(() => {
        setAnswear("");
      }, 500);
    }
  }
  return (
    <div className="bg-gradient-to-br from-cyan-950 to-cyan-800 flex flex-col items-center rounded-2xl py-2 shadow-md ">
      <input
        id="answearInput"
        type="text"
        className={
          "text-4xl w-3/4 text-gray-950 text-center rounded-2xl m-3 py-2 shadow-md bg-slate-200"
        }
        value={answear}
        spellCheck={false}
        autoFocus={true}
        autoComplete="off"
        onChange={(e) => setAnswear(e.target.value.toLocaleLowerCase())}
      />
      <div className="flex justify-between w-3/4">
        <button
          onClick={() => {
            setSkipState(true);
            setAnswear("");
          }}
          className="text-3xl hover:text-amber-500 active:text-amber-600"
        >
          Skip
        </button>
        <button
          onClick={checkAnswear}
          className="text-3xl hover:text-green-500 active:text-green-600"
        >
          Guess
        </button>
      </div>
    </div>
  );
}

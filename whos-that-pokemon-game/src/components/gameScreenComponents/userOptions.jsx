export function UserOptions({
  answear,
  setAnswear,
  pokemonName,
  answearState,
  setAnswearState,
  setSkipState,
}) {
  function removeWrongInputColor() {
    let userInput = document.getElementById("answearInput");
    userInput.classList.remove("bg-red-500");
  }
  function wrongInputColor() {
    let userInput = document.getElementById("answearInput");
    userInput.classList.add("bg-red-500");
    setTimeout(removeWrongInputColor, 375);
  }
  function removeRightInputColor() {
    let userInput = document.getElementById("answearInput");
    userInput.classList.remove("bg-emerald-500");
  }
  function rightInputColor() {
    let userInput = document.getElementById("answearInput");
    userInput.classList.add("bg-emerald-500");
    setTimeout(removeRightInputColor, 375);
  }
  function checkAnswear() {
    if (answear === pokemonName) {
      setAnswearState(true);
      rightInputColor();
      setAnswear("");
    } else {
      setAnswearState(false);
      wrongInputColor();
    }
    console.log(answearState);
  }
  return (
    <div className="bg-gradient-to-br from-cyan-950 to-cyan-800 flex flex-col items-center  rounded-2xl py-2 shadow-md">
      <input
        id="answearInput"
        type="text"
        className="text-4xl w-3/4 bg-slate-200 text-gray-950 text-center rounded-2xl m-3 py-2 shadow-md"
        value={answear}
        spellCheck={false}
        autoFocus={true}
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

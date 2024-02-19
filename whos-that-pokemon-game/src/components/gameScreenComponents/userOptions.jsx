//A React component to provide user input options for guessing the Pokemon name.
//It includes an input field for user guesses and buttons for skipping or guessing.

export function UserOptions({
  answear,
  setAnswear,
  pokemonName,
  answearState,
  setAnswearState,
  setSkipState,
}) {
  //Function to remove the wrong input color class.
  function removeWrongInputColor() {
    let userInput = document.getElementById("answearInput");
    userInput.classList.remove("bg-red-500");
  }
  //Function to apply the wrong input color class.
  function wrongInputColor() {
    let userInput = document.getElementById("answearInput");
    userInput.classList.add("bg-red-500");
    setTimeout(removeWrongInputColor, 375);
  }
  //Function to remove the right input color class.
  function removeRightInputColor() {
    let userInput = document.getElementById("answearInput");
    userInput.classList.remove("bg-emerald-500");
  }
  //Function to apply the right input color class.
  function rightInputColor() {
    let userInput = document.getElementById("answearInput");
    userInput.classList.add("bg-emerald-500");
    setTimeout(removeRightInputColor, 375);
  }
  //Function to check the user's guess.
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

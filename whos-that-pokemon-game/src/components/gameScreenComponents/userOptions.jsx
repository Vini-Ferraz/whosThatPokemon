export function UserOptions({
  answear,
  setAnswear,
  pokemonName,
  answearState,
  setAnswearState,
  setSkipState,
}) {
  function checkAnswear() {
    if (answear === pokemonName) {
      setAnswearState(true);
      setAnswear("");
    } else {
      setAnswearState(false);
    }
    console.log(answearState);
  }
  return (
    <div className="bg-gradient-to-br from-cyan-950 to-cyan-800 flex flex-col items-center  rounded-2xl py-2 shadow-md">
      <input
        type="text"
        className="text-4xl w-3/4 bg-slate-200 text-gray-950 text-center rounded-2xl m-3 py-2 shadow-md"
        value={answear}
        spellCheck={false}
        autoFocus={true}
        onChange={(e) => setAnswear(e.target.value.toLocaleLowerCase())}
      />
      <div className="flex justify-between w-3/4">
        <button onClick={() => setSkipState(true)} className="text-3xl">
          Skip
        </button>
        <button onClick={checkAnswear} className="text-3xl">
          Guess
        </button>
      </div>
    </div>
  );
}

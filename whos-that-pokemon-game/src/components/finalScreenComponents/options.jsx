export function Options({ setMenuState }) {
  return (
    <div className="w-3/4 sm:w-2/4 md:w-2/6">
      <button
        className="bg-gradient-to-b from-sky-500 to-sky-600 hover:bg-gradient-to-b hover:from-indigo-500 hover:to-indigo-600 active:bg-gradient-to-b active:from-emerald-500 active:to-emerald-600 w-fit rounded-2xl text-4xl py-1.5 w-full"
        onClick={() => {
          setMenuState(true);
        }}
      >
        Play Again
      </button>
    </div>
  );
}

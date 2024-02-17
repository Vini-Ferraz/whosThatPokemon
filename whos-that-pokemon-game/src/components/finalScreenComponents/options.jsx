export function Options({ setMenuState }) {
  return (
    <div className="w-1/4">
      <button
        className="bg-gradient-to-b from-sky-500 to-sky-600 w-fit rounded-lg text-4xl py-1.5 w-full"
        onClick={() => {
          setMenuState(true);
        }}
      >
        Play Again
      </button>
    </div>
  );
}

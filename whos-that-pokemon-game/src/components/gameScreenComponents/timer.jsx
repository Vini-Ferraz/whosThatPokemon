import { useEffect } from "react";

export function Timer({ timer, setTimer }) {
  useEffect(() => {
    function reverseTimer() {
      setTimer((prevTimer) => prevTimer - 1);
    }
    const timerId = setTimeout(reverseTimer, 1000);
    return () => clearTimeout(timerId);
  }, [timer]);

  if (timer < 10) {
    return <h1 className="text-4xl">00:0{timer}</h1>;
  } else {
    return <h1 className="text-4xl">00:{timer}</h1>;
  }
}

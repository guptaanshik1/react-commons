import { useState } from "react";
import useCustomMemo from "../hooks/common/useCustomMemo";

const MemoPolyfill = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const value = useCustomMemo<number>(() => {
    console.log("Running the custom use memo");
    counter1 * counter1;
  }, [counter1]);

  return (
    <div className="flex flex-col justify-center align-middle">
      <h1>Memo Polyfill</h1>
      <div className="flex flex-col">
        <p>{counter1} - </p>
        <button onClick={() => setCounter1((prev) => prev + 1)}>
          Increment Counter1
        </button>
        <p>Memo Value: {value}</p>
        <p>{counter2} - </p>
        <button onClick={() => setCounter2((prev) => prev - 1)}>
          Decrement Counter2
        </button>
      </div>
    </div>
  );
};

export default MemoPolyfill;

import { useEffect, useState } from "react";
import useCustomEffect from "../hooks/common/useCustomEffect";

const Incrementer = () => {
  const [count, setCount] = useState(0);

  console.log("Component re-rendered");

  useCustomEffect(() => {
    console.log("Effect Triggered: ", count);
  });

  return (
    <div>
      <h1>Custom Use Effect Hook</h1>
      <h1 className="font-bold text-2xl">{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default Incrementer;

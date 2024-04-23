import { useState } from "react";
import useTimeout from "../hooks/common/useTimeout";

const TimeoutComponent = () => {
  const [count, setCount] = useState(0);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {count}
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <button onClick={clear}>Clear</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default TimeoutComponent;

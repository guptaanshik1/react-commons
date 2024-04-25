import { useCallback, useEffect } from "react";
import { add, divide, multiply, subtract } from "../utils/mathOpsHelpers";

const ArraysOfFunctions = () => {
  const fnsArray = [add, subtract, multiply, divide];
  const callFunctions = useCallback(
    () => fnsArray.map((fn) => fn(2, 2)),
    [fnsArray]
  );
  console.log(callFunctions());

  useEffect(() => {
    callFunctions();
  }, []);

  return <div>ArraysOfFunctions</div>;
};

export default ArraysOfFunctions;

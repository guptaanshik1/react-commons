import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let intervalId;

    if (value < 100) {
      intervalId = setInterval(() => {
        setValue((prev) => Math.min(prev + 1, 100));
      }, 100);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId!);
  }, []);

  return (
    <div className="p-4">
      <h1>Progress Bar</h1>
      <div
        style={{ border: "1px solid black" }}
        className="w-full relative flex justify-center align-middle mx-auto rounded-xl overflow-hidden"
      >
        <span className="z-10">{`${value} %`}</span>
        <div
          className={`bg-[#00c251] absolute h-full flex start-0`}
          style={{
            width: `${value}%`,
            transitionProperty: "width",
            transformOrigin: "left",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

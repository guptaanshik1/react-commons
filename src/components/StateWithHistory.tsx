import { useState } from "react";

const StateWithHistory = () => {
  const [name, setName] = useState("Kyle");

  return (
    <div>
      <h1>StateWithHistory</h1>
      <button>Double</button>
      <button>Increment</button>
      <button>Back</button>
      <button>Forward</button>
      <button>Go to index 2</button>
      <button>Change Name</button>
    </div>
  );
};

export default StateWithHistory;

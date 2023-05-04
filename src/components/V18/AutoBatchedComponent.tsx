import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";

function AutoBatchedComponent() {
  const [autoBatching, setAutoBatching] = useState(true);
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(false);

  function handleClick() {
    setCount((c) => c + 1); // Does not trigger a re-render yet
    setIsEven((count + 1) % 2 === 0); // Does not trigger a re-render yet
    // React will now do one render for 2 state changes
  }
  function handleClickWithFlush() {
    // will force a render
    flushSync(() => {
      setCount((c) => c + 1);
    });
    // will cause another render
    setIsEven((count + 1) % 2 === 0);
  }
  useEffect(() => {
    console.log("rendering auto-batched component");
  });

  return (
    <div>
      <p className="flex justify-evenly">
        AutoBatching is
        <h3 className="h3">{autoBatching ? "ON" : "OFF"} </h3>
        <button
          onClick={() => setAutoBatching(!autoBatching)}
          className="p-4 border-2 border-amber-600 bg-amber-500 text-white"
        >
          toggle
        </button>{" "}
      </p>
      <div className="flex flex-auto">
        <button
          onClick={autoBatching ? handleClick : handleClickWithFlush}
          className="bg-green-50 p-4 text-red-600 text-lg"
        >
          +1
        </button>
        <p className="even-odd h4">
          {count} is {isEven ? "even" : "odd"}
        </p>
      </div>
    </div>
  );
}
export default AutoBatchedComponent;

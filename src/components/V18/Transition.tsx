import React, { useState, useTransition } from "react";

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = useState(10);
  const [count, setCount] = useState(10);
  const clickTab = (amount: number) => {
    setSelected(amount);
    startTransition(() => setCount(amount));
  };
  const GetGrid = () => {
    for (let i = 0; i <= count; i++) {
      return (
        <>
          <div className={`bg-gray-300 p-4 grid grid-cols-${count}"`}>
            {count}{" "}
          </div>
          ;
        </>
      );
    }
  };
  return (
    <div>
      <h3>click on the buttons to display larger and larger grids.</h3>
      <p>
        When you click on the button to select the grid size, the button's state
        changes immediately, but the grid may take a very long time to render.
      </p>
      <p>
        Click on the 500 x 500 button then on the 10 x 10 to cancel that render
      </p>
      <div className="tabs">
        <button
          className={`p-6 bg-red-400 ${selected === 10 && "bg-green-700"}`}
          onClick={() => {
            clickTab(10);
          }}
        >
          10 by 10
        </button>
        <button
          className={`p-6 bg-red-400 ${selected === 100 && "bg-green-700"}`}
          onClick={() => {
            clickTab(100);
          }}
        >
          100 by 100 (slower)
        </button>
        <button
          className={`p-6 bg-red-400 ${selected === 500 && "bg-green-700"}`}
          onClick={() => {
            clickTab(500);
          }}
        >
          500 by 500 (slowest)
        </button>
        <div className="rendering">{isPending ? " rendering..." : ""}</div>
      </div>
      <div className="grid grid-cols-4">
        {[...Array(count)].map((c, i) => (
          <div className={`bg-gray-300 p-4 mt-4 mb-4 mx-2 "`}>
            {count}- {i}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Transition;

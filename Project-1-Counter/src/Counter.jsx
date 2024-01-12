import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="bg-slate-500 flex justify-center items-center h-screen">
      <div className="w-[400px] h-[500px] border-2 border-slate-300 rounded-lg flex flex-col justify-evenly items-center">
        <h1 className=" text-2xl font-semibold text-slate-200 uppercase ">
          Counter
        </h1>

        <h3 className="text-slate-200 text-3xl ">{count}</h3>

        <section className="flex space-x-5 mt-2">
          <button
            className="py-2 px-3 bg-blue-600 rounded-lg text-slate-200 font-semibold text-sm"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="py-2 px-3 bg-blue-600 rounded-lg text-slate-200 font-semibold text-sm"
            onClick={handleDecrement}
          >
            Decrement
          </button>
          <button
            className="py-2 px-3 bg-blue-600 rounded-lg text-slate-200 font-semibold text-sm"
            onClick={handleReset}
          >
            Reset
          </button>
        </section>
      </div>
    </div>
  );
};

export default Counter;

"use client";

import useCounterStore from "@/store/useCounterStore";
import React from "react";

const Count = () => {
  const { count, increment, decrement, reseat } = useCounterStore();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reseat()}>Reseat</button>
    </div>
  );
};

export default Count;

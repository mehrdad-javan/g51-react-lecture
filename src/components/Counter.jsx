import React, { useState } from "react";

const Counter = () => {
   const [counter  , setCounter ] = useState(0);

   const incrementHandler = () => {
    setCounter(counter + 1);
   }

  return (
    <div className="counter text-center">
      <h1 className="text-center">Counter {counter}</h1>
      <button className="btn btn-success" onClick={incrementHandler}>Increment</button>
      <button className="btn btn-danger" onClick={()=> setCounter(counter - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;

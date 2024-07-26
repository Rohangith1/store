import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [clicked, setClicked] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    //code to run after render or update
    console.log("we r in  use state");
    return () => {
      console.log("return of use state");
    };
  }, [clicked, count]);
  return (
    <div>
      <button onClick={() => setClicked("This")}>This</button>
      <br />
      <hr />
      <button onClick={() => setClicked("is")}>is </button>
      <br />
      <hr />
      <button onClick={() => setClicked("Jhon")}>Jhon</button>
      <br />
      <hr />
      <h1>{clicked}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <h2>{count}</h2>
    </div>
  );
};

export default UseEffect;

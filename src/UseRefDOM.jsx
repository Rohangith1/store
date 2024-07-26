import React, { useEffect, useRef } from "react";

export const UseRefDOM = () => {
  const inputEl = useRef(null);

  // useEffect(() => {
  //   inpuutEl.current.focus();
  // },[])

  function handleFocus() {
    inputEl.current.style.backgroundColor = "black";
  }

  function handleBlur() {
    inputEl.current.style.backgroundColor = "";
  }

  return (
    <div>
      <input
        ref={inputEl}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

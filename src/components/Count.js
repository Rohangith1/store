import React, { useState } from 'react'

const Count = () => {
    const [add, setAdd] = useState(0);
   // console.log(add);

    const handleClickInc=() => {
        setAdd(add+1)
    }
    const handleClickDec = () => {
        if (add <= 0) {
            
        }
        else {
            setAdd(add - 1);

        }
      
    };
  return (
    <div>
      <p> qty: {add}</p>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  );
}

export default Count
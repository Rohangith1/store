import React, { useReducer, useState } from "react";


const reducer = (state, action) => {
    console.log(state, action)
    if (action.type=='incr') {
        return {count: state.count+1}
    } else if(action.type=='decr'){
         return { count: state.count - 1 };
    } else {
        throw new Error('Unsupported action type')
    }
}

const Count = () => {
  //   const [add, setAdd] = useState(0);
  //   // console.log(add);
    //syntax=> const [state, dispatch] = useReducer(reducer, initialState);
    const [state, dispatch] = useReducer(reducer, {count:0});

  //Reducer (coffee maker) is a pure fuction
  //state(coffee powder) and action(water poree)
    //return => new state(coffee)
    
    //pure function
    //10+10 arg pass=> 20
    //no side efffect

  const handleClickInc = () => {
    dispatch({type: "incr"})
  };
  const handleClickDec = () => {
    if (state.count <= 0) {
    } else {
      dispatch({ type: "decr" });
    }
  };
  return (
    <div>
      <p> qty: {state.count}</p>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  );
};

export default Count;

import React, { useRef } from 'react'
import Child from './Child'

const Parents = () => {
    const childRef = useRef(null);

    function handleOpenModel(val) {
        childRef.current.openModel(val);
    }

  return (
    <div>
          <p>This is Parents</p>
          <Child ref={ childRef} />
          <button onClick={()=>handleOpenModel(true)}>Open Modal</button>
    </div>
  );
}

export default Parents
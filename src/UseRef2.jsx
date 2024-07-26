import React, { useEffect, useRef, useState } from 'react'

const UseRef2 = () => {
    //const [count, setCount] = useState(0)

    const count=useRef(0)

    useEffect(() => {
        console.log("the compo have been rendered");
    })
    
    const handle =() => {
        // setCount(count + 1)
        count.current = count.current + 1;
        console.log(`Clicked ${count.current} times`)
    }

  return (
      <div>
          <button onClick={handle}>Click Me</button>
      
      </div>
  )
}

export default UseRef2
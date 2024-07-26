// import React, { useEffect, useRef, useState } from 'react'

// const UseRefEg = () => {
//     // const reference = useRef(1)
//     // console.log(reference)
//     const [userInput, setUserInput] = useState('');
//     // const [renders, setRender] = useState(0);
//     const renders = useRef(0);
//     useEffect(() => {
//         renders.current = renders.current + 1;
//     })

//   return (
//       <div>
//           <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
//           <p>The component renders { renders} times</p>
//       </div>
//   )
// }

// export default UseRefEg

import React, { useEffect, useRef, useState } from "react";

const UseRefEg = () => {
  const [userInput, setUserInput] = useState("");
  const renders = useRef(0);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  return (
    <div>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <p>The component renders {renders.current} times</p>
    </div>
  );
};

export default UseRefEg;

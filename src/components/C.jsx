import React from 'react'
import { GreetContext } from './A'
import { useContext } from 'react'



const C = () => {
  // console.log(props)

  const useCon = useContext(GreetContext);
  //onst useCon2 = useContext(GreetContext2);

  console.log(useCon)

  return (
    <h1>
      Greet: {useCon.greet} {useCon.greet2}
    </h1>
  );
}

export default C

{/*
<div>
            <GreetContext.Consumer>
                {
                    (val1) => {
                        return (
                            <GreetContext2.Consumer>
                                {
                                    (val2) => {
                                        return <h1> Greet : {val1} { val2}</h1>
                                    }
                                }
                            </GreetContext2.Consumer>
                    )
                }}
            </GreetContext.Consumer>
        </div>
    
    */}
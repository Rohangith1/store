import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {
    useEffect(() => {
    console.log("use Effect Part")
    }, [])
    useLayoutEffect(() => {
        console.log("use layout effect");//always runn fast
    },[])

  return (
    <div>UseLayoutEffect</div>
  )
}

export default UseLayoutEffect
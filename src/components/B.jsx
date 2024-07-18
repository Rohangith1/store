import React from 'react'
import C from './C'

const B = (props) => {
    console.log(props)
  return (
      <div>
          <C greet={props.greet}/>
      </div>
  )
}

export default B

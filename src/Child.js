import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Child = (props, ref) => {
    const [openModel, setOpenModel] = useState(false)
    
    useImperativeHandle(ref, () => ({
        openModel: (value) => {
            setOpenModel(value)
        }
    }))
    if (!openModel) return null;
  return (
      <div>
          <p>This is Model</p>
          <button onClick={() => setOpenModel(false)}>Close</button>
      </div>
  )
}

export default forwardRef(Child)
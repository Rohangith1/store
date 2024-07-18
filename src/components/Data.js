import React, { useState } from 'react'
import datas from './datas.json'

const Data = () => {

    const [nData, setnData] = useState(datas)
    //console.log(datas)

    const handleRemove = (itemId) => {
        setnData(nData.filter(item=>item.id!==itemId))
        
    }
    const handleUpdate = (itemId) => {
        setnData(nData.map(ele=> {
            if (ele.id === itemId) {
        return{name: "NewName"}
    }else{return ele}
        }))
    }
  return (
      <div>
          <ul>
              {
                  nData.map(ele => {
                      return (
                        <li key={ele.id}>
                          {ele.name}
                          <br />
                          <button onClick={() => handleUpdate(ele.id)}>
                            Update
                          </button>
                          <button onClick={() => handleRemove(ele.id)}>
                            Remove
                          </button>
                        </li>
                      );
                  })
              }
              
          </ul>
          <button onClick={()=>setnData([])}>Clear</button>
      </div>
  )
}

export default Data
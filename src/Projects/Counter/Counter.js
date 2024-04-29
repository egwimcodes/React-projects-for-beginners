import React from 'react'
import { useState } from 'react'
import './Counter.css'
const Counter = () => {
    let [counter, setCounter] = useState(0)
    
  return (
    <div className="container">
          <div className="child">
              <div className="display">
                  {counter}
              </div>
              <div className="btns">
                  <button onClick={() => {setCounter(counter - 1)}}>-</button>
                  <button onClick={() => { setCounter(counter + 1) }}>+</button>
              </div>
        </div>
    </div>
  )
}

export default Counter
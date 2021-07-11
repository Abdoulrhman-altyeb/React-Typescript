import React, { useState, useRef } from "react";
import Counter from "./Counter";
import Header from './Header'


const App:React.FC  = () => {


  return (
    <div>
      <Header buttonText='press this button' i={0}  ok={true} person={{lastName: 'altyeb', firstName:'abdulrhman'}} />
      <Counter>
        {(count, setCount) => {
          <div>
            {count}
            <button onClick = {() => setCount(count + 1)}>+</button>
          </div>
        }}
      </Counter>
    </div>
  )
}

export default App;

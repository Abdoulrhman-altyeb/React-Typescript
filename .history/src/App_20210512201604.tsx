import React, { useState, useRef } from "react";
import NavBar from "./components/NavBar";
import Counter from "./Counter";
import Header from './Header'


const App:React.FC  = () => {


  return (
    <div>
      <NavBar/>
      <Header buttonText='press this button' i={0}  ok={true} person={{lastName: 'altyeb', firstName:'abdulrhman'}} />
      <Counter>
        {({count, setCount}) => {
          return (
          <div>
            {count}
            <button onClick = {() => setCount(count + 1)}>+</button>
          </div>
          )
        }}
      </Counter>
    </div>
  )
}

export default App;

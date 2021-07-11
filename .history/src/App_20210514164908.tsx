import React, { useState, useRef } from "react";


const App: React.FC = () => {
  
  const obj = (obj:{firstName:string,lastName:string}) => {
    return {
      ...obj,
      fullName:firstName +' ' + lastName,
    }
  }

  const u1 = obj(firstName:'abdo',lastName:'alboshra')

  return (
    <div>
      <h1>This is header</h1>
    </div>
  )
}

export default App;

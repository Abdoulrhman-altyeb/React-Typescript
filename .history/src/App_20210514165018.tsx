import React, { useState, useRef } from "react";


const App: React.FC = () => {
  
  const obj = <T extend {firstName:string,lastName:string}>(obj:T) => {
    return {
      ...obj,
      fullName:obj.firstName +' ' + obj.lastName,
    }
  }

  const u1 = obj({ firstName: 'abdo', lastName: 'alboshra' })

  console.log(u1)
  return (
    <div>
      <h1>This is header</h1>
    </div>
  )
}

export default App;

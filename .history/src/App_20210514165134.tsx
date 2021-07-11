import React, { useState, useRef } from "react";


const App: React.FC = () => {
  
  const obj = (obj:{firstName:string,lastName:string}) => {
    return {
      ...obj,
      fullName:obj.firstName +' ' + obj.lastName,
    }
  }
  const u1 = obj({ firstName: 'abdo', lastName: 'alboshra' })
  console.log(u1)

  const one = (x: string):[x] => {
    return[x]
  }

  const o1 = one('string');
  console.log(o1)



  return (
    <div>
      <h1>This is header</h1>
    </div>
  )
}

export default App;

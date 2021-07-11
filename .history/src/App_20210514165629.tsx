import React, { useState, useRef } from "react";


const arr = <T>(arr: T):T =>{
  return arr[arr.length -1 ]
}
const n = arr([1, 2, 3]);
console.log(n)




const App: React.FC = () => {
  
 

  return (
    <div>
      <h1>This is header</h1>
    </div>
  )
}

export default App;

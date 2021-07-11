import React, { useState, useRef } from "react";


const App: React.FC = () => {
  
  type arr = Array<number>
  type arrN = number[];

  const last = <T>(arr:T[] ) => {
    return arr[arr.length - 1];
  }

  const l = last([1, 2, 3]);
  console.log(l);
  const l2 = last(['a', 'b', 'c'])
  console.log(l2)

  return (
    <div>
      <h1>This is header</h1>
    </div>
  )
}

export default App;

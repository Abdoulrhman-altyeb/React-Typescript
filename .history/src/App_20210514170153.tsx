import React, { useState, useRef } from "react";

const App: React.FC = () => {



  const one = <T extends {}>(arr: Array<T>) =>{
    return arr[arr.length - 1];
  }
  const o1 = one([1, 2, 3, 4])
  const o2 = one(['a', 'b', 'c', 'd'])
  const o3 = one([1,2,3,'4','5'])
  return (
    <div>
      <h1>This is header</h1>
    </div>
  )
}

export default App;

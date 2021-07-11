import React, { useState, useRef } from "react";

const App: React.FC = () => {
  const one = <T extends {}>(arr: Array<T>) =>{
    return arr[arr.length - 1];
  }


  return (
    <div>
      <h1>This is header</h1>
    </div>
  )
}

export default App;

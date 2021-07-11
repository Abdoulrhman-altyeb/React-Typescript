import React, { useState, useRef } from "react";


const App: React.FC = () => {
  
  const obj = (obj: {}) => {
    return {
      ...obj,
      fullName:firstName +' ' + lastName,
    }
  }

  return (
    <div>
      <h1>This is header</h1>
    </div>
  )
}

export default App;

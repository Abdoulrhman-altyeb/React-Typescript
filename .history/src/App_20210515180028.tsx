import React, { useState, useRef } from "react";
import ListItem from "./ListItem";

interface ListProps {
   text: string, complete: boolean 
}


const App: React.FC = () => {

  const ListItems: Array<ListProps> = [
   {text:'click me to shade', complete:true},
   {text:'dont\'t click me' ,complete:false},
  ]

  return (
    <>
      
      {ListItems.map(item => (
          <div>
            <h1>{item.text}</h1>
            <p>{item.complete}</p>
          </div>
        ))}
    </>
  )
}

export default App;

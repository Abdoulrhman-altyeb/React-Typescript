import React, { useState, useRef } from "react";
import ListItem from "./ListItem";

interface ListItem {
  text: string,
  complete: boolean
}

const App: React.FC = () => {

  const ListItems<ListItem> = [
   {text:'click me to shade', complete:true},
   {text:'click me to shade', complete:false},
    
  ]

  return (
    <div>
      <h1>This is header</h1>
    </div>
  )
}

export default App;

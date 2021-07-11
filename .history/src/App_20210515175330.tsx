import React, { useState, useRef } from "react";
import ListItem from "./ListItem";

interface ListItem {
  { text: string, complete: boolean }
}

  const ListItems<ListItem> = [
   {text:'click me to shade', complete:true},
   {text:'dont\'t click me'</ListItem>', complete:false},
  ]

const App: React.FC = () => {


  return (
    <div>
      <h1>This is header</h1>
    </div>
  )
}

export default App;

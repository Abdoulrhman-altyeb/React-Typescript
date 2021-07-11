import React, { useState, useRef } from "react";
import ListItem from "./ListItem";


const App: React.FC = () => {

  const ListItems: Array<ListProps> = [
   {text:'click me to shade', complete:true},
   {text:'dont\'t click me' ,complete:false},
  ]

  return (
    <>
      <ListItem ListItems={ListItems}/>
    </>
  )
}

export default App;

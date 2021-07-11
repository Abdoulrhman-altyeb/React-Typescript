import React, { useState, useRef } from "react";
import ListItem from "./ListItem";

const intialItems: Array<ListProps> = [
  {text:'click me to shade', complete:false},
  {text:'dont\'t click me' ,complete:true},
]

const App: React.FC = () => {

  const [todos, setTodos] = useState(intialItems);
  
  const toggleTodo = (selectedTodo) => {
    const newTodo = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete;
        }
      }
      else {
        return todo
      }
    });
    setTodos(newTodo);)
  }

  return (
    <>
      <ListItem todos={todos}/>
    </>
  )
}

export default App;

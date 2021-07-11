import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListItem from "./ListItem";

const intialItems: Array<ListProps> = [
  { text: 'click me to shade', complete: true, id: new Date().toString()},
  {text:'dont\'t click me' ,complete:false, id: new Date().toString()},
]

const App: React.FC = () => {

  const [todos, setTodos] = useState(intialItems);
  
  const toggleTodo = (selectedTodo:ListProps) => {
    const newTodo = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      else {
        return todo
      }
    });
    setTodos(newTodo);
  }

  const addHandel:addHandel = newTodo => {
    setTodos([...todos, { text: newTodo, complete: false }]);
  }

  return (
    <>
      <ListItem todos={todos} toggleTodo={toggleTodo} />
      <AddTodo addHandel={addHandel} />
    </>
  )
}

export default App;

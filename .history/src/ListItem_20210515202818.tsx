import React from 'react';
import TodoListITems from './TodoListItems';

interface ListItemProps {
    todos: Array<ListProps>;
    toggleTodo: ToggleTodo;
}

const ListItem:React.FC<ListItemProps> = ({todos ,toggleTodo}) => {
    return(
        <ul>
            {todos.map(todo => {
                return (
                    <TodoListITems prop={todo} toggleTodo={toggleTodo}/>
                )
            })}
        </ul>
    )
}
export default ListItem
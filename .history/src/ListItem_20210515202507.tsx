import React from 'react';
import TodoListITems from './TodoListItems';

interface ListItemProps {
    todos: Array<ListProps>;
    toggleTodo: (selectedTodo: ListProps) => void;
}

const ListItem:React.FC<ListItemProps> = ({todos}) => {
    return(
        <ul>
            {todos.map(todo => {
                return (
                    <TodoListITems prop={todo}/>
                )
            })}
        </ul>
    )
}
export default ListItem
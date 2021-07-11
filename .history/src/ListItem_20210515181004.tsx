import React from 'react';

interface ListItemProps {
    todos: Array<ListProps>;
}

const ListItem:React.FC<ListItemProps> = ({todos}) => {
    return(
        <ul>
            {todos.map(todo => {
                return (
                    <h1>{todo.text}</h1>
                    <h1>{todo.complete}</h1>
                )
            }}
        </ul>
    )
}
export default ListItem
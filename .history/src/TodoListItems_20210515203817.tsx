import { pixelsToPercent } from 'framer-motion/types/render/dom/layout/scale-correction';
import React from 'react';

interface Prop {
    prop: ListProps;
    toggleTodo: (selectedTodo: ListProps) => void;
}
const TodoListITems: React.FC<Prop> = ({prop,toggleTodo}) => {
    return (
        <li className={prop.complete ? 'complete' : ''}>
            <input type="checkbox" checked={prop.complete} onChange={() => toggleTodo(prop)}/>
            <label>{prop.text}</label>
        </li>
    )
}

export default TodoListITems
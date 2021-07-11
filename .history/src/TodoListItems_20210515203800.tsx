import { pixelsToPercent } from 'framer-motion/types/render/dom/layout/scale-correction';
import React from 'react';

interface Prop {
    prop: ListProps;
    toggleTodo:(selectedTodo:ListProps) => void
}
const TodoListITems: React.FC<Prop> = ({prop,toggleTodo}) => {
    return (
        <li>
            <input type="checkbox" checked={prop.complete} onChange={() => toggleTodo(prop)}/>
            <label className={prop.complete ? 'complete' : ''}>{prop.text}</label>
        </li>
    )
}

export default TodoListITems
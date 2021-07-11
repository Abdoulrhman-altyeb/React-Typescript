import { pixelsToPercent } from 'framer-motion/types/render/dom/layout/scale-correction';
import React from 'react';

interface Prop {
    prop: ListProps;
    ToggleTodo:ToggleTodo
}
const TodoListITems: React.FC<Prop> = ({prop}) => {
    return (
        <li>
            <input type="checkbox" checked={prop.complete} onChange={() => ToggleTodo(prop)}/>
            <label className={prop.complete ? 'complete' : ''}>{prop.text}</label>
        </li>
    )
}

export default TodoListITems
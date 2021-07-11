import { pixelsToPercent } from 'framer-motion/types/render/dom/layout/scale-correction';
import React from 'react';

interface Prop {
    prop: ListProps;
}

console.log(listProps)
const TodoListITems: React.FC = ({prop}) => {
    return (
        <li>
            <input type="checkbox" checked={prop.complete}/>
            <label>{prop.text}</label>
        </li>
    )
}

export default TodoListITems
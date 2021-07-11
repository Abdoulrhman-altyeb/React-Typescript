import { pixelsToPercent } from 'framer-motion/types/render/dom/layout/scale-correction';
import React from 'react';


const TodoListITems: React.FC = () => {
    return (
        <li>
            <input type="checkbox" checked={prop.complete}/>
            <label>{prop.text}</label>
        </li>
    )
}

export default TodoListITems
import React, { Children } from 'react'


interface Props{

}


const Counter: React.FC<Props> = () => {
        return (<div>
            {Children(count,setCount)}
        </div>);
}


export default Counter<div>
{Children(count,setCount)}</div>
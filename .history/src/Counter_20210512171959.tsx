import React, { Children } from 'react'


interface Props{

}


const Counter: React.FC<Props> = ({children}) => {
        return <div>{Children(count,setCount)}</div>;
}


export default Counter<div>

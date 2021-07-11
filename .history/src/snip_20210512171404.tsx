import React from 'react'


interface Props{
    one?: string;
}


export cosnt nice: React.FC<Props> = ({one}) => {
    return (
            <h1>This is cool</h1>
        );
}
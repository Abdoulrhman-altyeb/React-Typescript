import React from 'react'


interface Props{
    one?: string;
}


export cosnt Snip: React.FC<Props> = ({one}) => {
    return (
            <h1>This is cool</h1>
        );
}
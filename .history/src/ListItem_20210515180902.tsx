import React from 'react';

interface ListItemProps {
    todos:Array<ListProps>
}

const ListItem:React.FC<ListProps> = (props) => {
    return(
        <li>
            <input type="checkbox" checked={true} />
            <label></label>
        </li>
    )
}
export default ListItem
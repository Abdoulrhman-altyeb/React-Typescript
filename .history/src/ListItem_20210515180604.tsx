import React from 'react';

interface ListItemProps {
    todos:ListProps
}

const ListItem:React.FC<ListItemProps> = (props) => {
    return(
        <li>
            <input type="checkbox" checked={true} />
            <label></label>
        </li>
    )
}
export default ListItem
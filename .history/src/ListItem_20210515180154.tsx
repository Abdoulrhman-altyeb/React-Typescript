import React from 'react';

const ListItem:React.FC<ListProps> = (props) => {
    return(
        <li>
            <input type="checkbox" checked={true} />
            <label></label>
        </li>
    )
}
export default ListItem
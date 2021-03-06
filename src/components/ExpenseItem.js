import React from 'react'
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = ({name, cost}) => {
    return (
        <li className="list-group-item d-flex flex-direction-row justify-content-between align-items-center">
            {name}
            <div>
            <span className="badge badge-primary badge-pill mr-3">
                ${cost}
            </span>

                <TiDelete size="1.5em"/>
            </div>
        </li>
     );
}
 
export default ExpenseItem;
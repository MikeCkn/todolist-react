import React from 'react';
import PropTypes from 'prop-types';



const TodoItem = (props) => {
    return(
        <li>
            <input 
                type="checkbox" 
                onChange={() => props.handleToggle(props.id)} 
                checked={props.isComplete}
            />
            {props.name}
           {/* <Button className="test" bsStyle="danger">X</Button>*/}
        </li>
    )         
}

TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    isComplete : PropTypes.bool,
    id: PropTypes.number.isRequired
}

export default TodoItem;
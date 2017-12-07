import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = (props) => {
    return( 
            <div className="toDoList">
                <ul>
                    {props.todos.map(todo => 
                    <TodoItem 
                        handleToggle={props.handleToggle} 
                        key={todo.id} {...todo}
                    />)}
                </ul>    
            </div>
        )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList;
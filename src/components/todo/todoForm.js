import React from 'react';
import PropTypes from 'prop-types'


const TodoForm = (props) => (
                <form onSubmit={props.handleSubmit}>
                   <input 
                        type="text" 
                        onChange={props.handleInputChange} 
                        value={props.currentTodo} 
                        placeholder="Add a task.."/>
                </form>)

TodoForm.propTypes = {
    currentTodo: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default TodoForm;
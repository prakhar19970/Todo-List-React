import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
// import { render } from '@testing-library/react';

class Todo extends Component {

    render() {

        return this.props.todos.map((todo, index) => (
            <TodoItem todo={todo} position={index + 1} markComplete={this.props.markComplete} delButton={this.props.delButton} key={index + 1} />
        ))
    }
}
//PropTypes
Todo.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todo;

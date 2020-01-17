import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css'
export class TodoItem extends Component {
    getStyle = () => {
        return {
            //background: "rgb(226, 164, 83)",
            /* background-color: rgb(226, 164, 83); */
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: this.props.todo.completed ? 'rgb(50,205,50)' : 'rgb(226, 164, 83)'

        }
    }


    render() {
        const id = this.props.position;
        const { title, completed } = this.props.todo;
        return (

            <div className="list-item" style={this.getStyle()} position={id}>

                <p className='list-line'>
                    <input type='checkbox' onChange={this.props.markComplete} checked={completed} />
                    {title}
                    <button onClick={this.props.delButton}
                        className="btnStyle">Delete</button>
                </p>
            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem

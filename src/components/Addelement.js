import React, { Component } from 'react';
import '../App.css'

export class Addelement extends Component {


    stopSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.firstElementChild.value);
        if (e.target.firstElementChild.value.trim().length) {
            this.props.addElement(e.target.firstElementChild.value)
        }
        e.target.firstElementChild.value = '';
    }
    render() {

        return (
            <div className="add-list-item" >
                <form className='form-item' onSubmit={this.stopSubmit} >
                    <input className="task-box" id='newTask' type='text' placeholder='enter new item' onSubmit={this.stopSubmit} />

                    <button type='submit' >AddItem</button>
                </form>
            </div >
        )

    }

}

export default Addelement;
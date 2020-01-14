import React from 'react';
import { tsParenthesizedType } from '@babel/types';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            newItem: ''
        }
    }

    handleChanges = e => {
        this.setState({newItem:e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newItem)
        this.setState({
            newItem: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                value={this.state.newItem}
                onChange={this.handleChanges}
                type="text"
                name="item"
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm
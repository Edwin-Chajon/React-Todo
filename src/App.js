import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const newTasks= [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      newTasks:newTasks
    }
  }

  addTodo = newItemText => {

    const newItem = {
      task: newItemText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      newTasks:[...this.state.newTasks, newItem]
    })
  }

  toggleItem= itemId => {

    this.setState({
      newTasks:this.state.newTasks.map(item=>{
        if (item.id === itemId){
          return{
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }


  clearComplete = () =>{
    const completedFilter = this.state.newTasks.filter(
      tasks => tasks.completed === false
    )
    this.setState({newTasks:completedFilter})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
      <TodoList toggleItem={this.toggleItem} newTasks={this.state.newTasks}/>
      <button onClick={this.clearComplete}>
                Clear</button>
      </div>
    );
  }
}

export default App;

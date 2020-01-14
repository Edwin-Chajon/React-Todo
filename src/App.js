import React from 'react';



const todoThings = [
  {
    name: 'Make A List',
    id: Math.random(),
    completed: false,
    cleared: false
  },
  {
    name: 'Make A List',
    id: Math.random(),
    completed: false,
    cleared: false
  }
];

console.log(todoThings)

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state




  constructor(){
    super();
    this.state = {
      todoList: todoThings
     }
    }


     addItem = (e) => {
       e.preventDefault()
       let newObect = {
        name: e,
        id: Math.random(),
        completed: false,
        cleared: false
      }
        return {...this.state, newObect}
      }

  render() {
    const getDone = this.state.todoList.map(item=>{return item.name});
    console.log(getDone)

 

    return (
      <div>
        <form onSubmit={this.addItem}>
        <input placeholder='input text here'/>
        </form>
        <h2>Welcome to your Todo App!</h2>
        <p>{getDone}</p>
      </div>
    );
  }
}

export default App;

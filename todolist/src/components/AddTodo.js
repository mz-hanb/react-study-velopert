import React, {Component} from 'react';
import '../css/AddTodo.css';


class AddTodo extends React.Component{
  constructor(props){
    super(props); 
    this.state={
      todoTitle: ''
    }
    this.updateTodoTitle = this.updateTodoTitle.bind(this);
    this.addTodo = this.addTodo.bind(this);    
  }

  updateTodoTitle(e){
    this.setState({
      todoTitle: e.target.value
    })  
  }

  addTodo(){
    this.props.addTodo(this.state.todoTitle);
  }

  render(){
    return(
      <div className="AddTodo">
        <input onChange={this.updateTodoTitle} />
        <button onClick={this.addTodo}>추가</button>
      </div>
    )
  }
}
export default AddTodo;
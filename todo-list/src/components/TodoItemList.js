import React, {Component} from 'react';
import TodoItem from './TotoItem';

class TodoItemList extends Component{

  shouldComponentUpdate(nextProps, nextState){
    return this.props.todos !== nextProps.todos;
  }

  render(){
    const {todos, onToggle, onRemove, setColor} = this.props;    
    const todoList = todos.map( ({id, text, checked})  => (
      <TodoItem
        id = {id}
        text = {text}
        checked =  {checked}
        onToggle = {onToggle}
        onRemove = {onRemove}
        key = {id}
        color = {setColor}
       />
    ));
    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;





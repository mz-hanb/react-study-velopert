import React, {Component} from 'react';
import '../css/ListItem.css';

class ListItem extends React.Component{
  render(){
    return(
      <li className="ListItem">
        <button className="btn-del-todo" onClick={this.props.delTodo}>X</button>        
        <p className="todo-title">{ this.props.todo }</p>
        <button className="btn-check-todo">v</button>
      </li>
    )
  }
}

export default ListItem;
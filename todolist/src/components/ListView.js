import React, {Component} from 'react';
import ListItem from './ListItem';
import '../css/ListView.css';


class ListView extends React.Component{
  render(){
    const todos = this.props.todos;
    const fnDel = this.props.delTodo;
    
    return(
      <ul className="ListView">
        { todos.map((todo, idx) => <ListItem todo={todo.title} key={idx} delTodo={fnDel} />) }
      </ul>
    )
  }
}

export default ListView;
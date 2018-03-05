import React, { Component } from 'react';
// import logo from './logo.svg';
import Pallette from './components/Pallette';
import AddTodo from './components/AddTodo';
import ListView from './components/ListView';

import './App.css';

const todos = [
  {title: '리액트 소개'}, 
  {title: 'JSX 사용해보기'}, 
  {title: '라이프 사이클 이해하기'} 
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: todos    
    }

    this.addTodo = this.addTodo.bind(this);
    this.delTodo = this.delTodo.bind(this);
  }

  addTodo(val){  
    console.log( val );
    this.setState({      
      todos: [
        ...this.state.todos,
        {title: val}
      ]
    })
  }
  
  delTodo(){
    var tgTodos = this.state.todos.pop();
    console.log( 'del> ' + tgTodos );
    this.setState({
      todos: tgTodos
    })
  
  }

  render() {
    return (
      <div className="App">              
        <header className="App-header">          
          <h1 className="App-title">오늘 할 일</h1>
        </header>        
        <Pallette />
        <AddTodo addTodo={this.addTodo} />
        <ListView todos={this.state.todos} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import UserList from './UserList';
import {Map, List, Record} from 'immutable';
import './App.css';

// User 를 위한 Record 생성
const User = Record({
  id: null, 
  username: null
})

// Data 를 위한  Record 생성
const Data = Record({
  input: '', 
  users: List()
})


class App extends Component {
  id = 3;
  state = {
    data: Data({
      users: List([
        User({
          id: 1, 
          username: 'velopert'
        }), 
        User({
          id: 2,
          username: 'mjkim'
        })
      ])
    })  
  }

  onChange = (e)=>{
    const {value} = e.target;
    const {data} = this.state;
    this.setState({
      data: data.set('input', value)
    });
  }

  onButtonClick = (e)=>{
    const {data} = this.state;

    this.setState({
      data: data.set('input', '')
                .update('users', users => users.push(Map({
                  id: this.id++, 
                  username: data.input
      })))
    })
  }

  render(){
    const { onChange, onButtonClick } = this;
    const { data } = this.state;    
    const input = data.input;
    const users = data.users;

    return (
      <div className="App">
        <div>
          <input onChange={ onChange } value={ input } />
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
           <UserList users={ users } />
        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { PostContainer } from './containers';
import { Header } from './components';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header />
        <PostContainer />
      </div>
    );
  }
}

export default App;

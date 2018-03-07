import React, { Component } from 'react';
import Counter from './components/Counter';
import Buttons from './components/Buttons';
import Option from './components/Option';

class App extends Component {  

  render() {
    return (
      <div style={ {textAlign: 'center'} }>
        <Counter />
        <Option />
        <Buttons />
      </div>
    );
  }
}

export default App;

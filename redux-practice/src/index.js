import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';

const store = createStore(counterApp);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();

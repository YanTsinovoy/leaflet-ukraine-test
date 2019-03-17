import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoundsExample from "./Components/BoundComp/index.js"
import Panel from "./Containers/Panel/index.js"
import {Provider} from 'react-redux';
import {store} from "./store.js"

store.subscribe(()=> console.log(store.getState()))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BoundsExample />
          <Panel />
        </Provider>
      </div>
    );
  }
}

export default App;

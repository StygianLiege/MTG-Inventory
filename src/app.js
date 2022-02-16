/*
------------ Before REACT ------------
//import component from './component';
//import './style.css';
//import './image-component';

//document.body.appendChild(component());
*/
import React, { Component } from 'react';

/// building react app
class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={'./Magicthegathering-logo.svg.png'} />
        <h1>gathering...</h1>
      </div>
    );
  }
}

export default App;

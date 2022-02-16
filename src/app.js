/*
------------ Before REACT ------------
//import component from './component';
//import './style.css';
//import './image-component';

//document.body.appendChild(component());
*/
import React, { Component } from 'react';
import Collection from './component';

/// building react app
class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={'./Magicthegathering-logo.svg.png'} />
        <h1>gathering...</h1>
        <Collection />
      </div>
    );
  }
}

export default App;

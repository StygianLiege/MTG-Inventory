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
  state = {
    cards: [
      {
        name: 'Swamp',
      },
      {
        name: 'Island',
      },
    ],
  };

  removeCard = (index) => {
    const { cards } = this.state;
    this.setState({
      cards: cards.filter((card, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        <img src={'./Magicthegathering-logo.svg.png'} />
        <h1>gathering...</h1>
        <Collection cardCollection={cards} removeCard={this.removeCard} />
      </div>
    );
  }
}

export default App;

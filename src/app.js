/*
------------ Before REACT ------------
//import component from './component';
//import './style.css';
//import './image-component';

//document.body.appendChild(component());
*/
import React, { Component } from 'react';
import Collection from './component';
import Form from './form';
const axios = require('axios');

/// building react app
class App extends Component {
  state = {
    cards: [],
    /*{
        name: 'Swamp',
      },
      {
        name: 'Island',
      },*/
  };
  // perform fetch request to retrieve data
  componentDidMount() {
    axios
      .get('http://localhost:3000/api')
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          console.log(response.data[i]);
          const card = response.data[i];
          this.setState({ cards: [...this.state.cards, card] });
        }
        console.log('axios:', response.data);
      })
      .catch((err) => {
        console.log('axios:', err);
      });
  }

  removeCard = (index) => {
    const { cards } = this.state;
    this.setState({
      cards: cards.filter((card, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (card) => {
    this.setState({ cards: [...this.state.cards, card] });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        <img src={'./Magicthegathering-logo.svg.png'} />
        <h1>The gathered...</h1>
        <Collection cardCollection={cards} removeCard={this.removeCard} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;

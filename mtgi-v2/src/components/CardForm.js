import { useState, useContext } from 'react';
import { Context } from './Context';

const CardForm = () => {
  const [cardName, setCardName] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardManaCost, setCardManaCost] = useState(0);
  const [cardUrl, setCardUrl] = useState('');
  const [colorless, setColorless] = useState(false);
  const [white, setWhite] = useState(false);
  const [blue, setBlue] = useState(false);
  const [red, setRed] = useState(false);
  const [black, setBlack] = useState(false);
  const [green, setGreen] = useState(false);

  const { update, dispatchUpdate, dispatchView } = useContext(Context);

  const handleAddCard = () => {
    const cArr = [colorless, white, blue, red, black, green];
    let cId = '';
    for (let i = 0; i < cArr.length; i++) {
      if (cArr[i] && i === 0) {
        cId += 'Colorless/';
      } else if (cArr[i] && i === 1) {
        cId += 'White/';
      } else if (cArr[i] && i === 2) {
        cId += 'Blue/';
      } else if (cArr[i] && i === 3) {
        cId += 'Red/';
      } else if (cArr[i] && i === 4) {
        cId += 'Black/';
      } else if (cArr[i] && i === 5) {
        cId += 'Green/';
      }
    }
    const cardColorIdentity = cId.slice(0, -1);
    const card = {
      cardName,
      cardType,
      cardManaCost,
      cardColorIdentity,
      cardUrl,
    };
    console.log(
      `Name: ${cardName}, Type: ${cardType}, Mana Cost: ${cardManaCost}, Url: ${cardUrl}`
    );
    console.log(
      `Colorless: ${colorless}, White: ${white}, Blue: ${blue}, Red: ${red}, Black: ${black}, Green: ${green}`
    );
    console.log(`Color Identity: ${cardColorIdentity}`);
    console.log(card);
    fetch('http://localhost:8000/cards', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(card),
    })
      .then(() => {
        console.log('New Card Added');
      })
      .then(() => {
        dispatchUpdate(update + 1);
        dispatchView(0);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="new-card">
      <h2>New Card</h2>
      <form className="new-card-form">
        <div className="new-card-input-container">
          <div className="new-card-text">
            <label>Card Name:</label>
            <input
              type="text"
              required
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
            <label>Card Type:</label>
            <input
              type="text"
              required
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
            />
            <label>Mana Cost:</label>
            <input
              type="number"
              required
              className="new-card-mana-cost"
              value={cardManaCost}
              onChange={(e) => setCardManaCost(e.target.value)}
            />
            <label>Image URL:</label>
            <input
              type="text"
              required
              value={cardUrl}
              onChange={(e) => setCardUrl(e.target.value)}
            />
          </div>
          <div className="new-card-mana-identity">
            <h3>Mana Identity:</h3>
            <div className="new-card-mana-identity-div">
              <label>Colorless</label>
              <input
                type="checkbox"
                className="mana-id-cb"
                id="mana-id-colorless"
                checked={colorless}
                onChange={() => setColorless(!colorless)}
              />
            </div>
            <div className="new-card-mana-identity-div">
              <label>White</label>
              <input
                type="checkbox"
                className="mana-id-cb"
                id="mana-id-white"
                checked={white}
                onChange={() => setWhite(!white)}
              />
            </div>
            <div className="new-card-mana-identity-div">
              <label>Blue</label>
              <input
                type="checkbox"
                className="mana-id-cb"
                id="mana-id-blue"
                checked={blue}
                onChange={() => setBlue(!blue)}
              />
            </div>
            <div className="new-card-mana-identity-div">
              <label>Red</label>
              <input
                type="checkbox"
                className="mana-id-cb"
                id="mana-id-red"
                checked={red}
                onChange={() => setRed(!red)}
              />
            </div>
            <div className="new-card-mana-identity-div">
              <label>Black</label>
              <input
                type="checkbox"
                className="mana-id-cb"
                id="mana-id-black"
                checked={black}
                onChange={() => setBlack(!black)}
              />
            </div>
            <div className="new-card-mana-identity-div">
              <label>Green</label>
              <input
                type="checkbox"
                className="mana-id-cb"
                id="mana-id-green"
                checked={green}
                onChange={() => setGreen(!green)}
              />
            </div>
          </div>
        </div>
      </form>
      <p className="new-card-button" onClick={handleAddCard}>
        Submit
      </p>
    </div>
  );
};

export default CardForm;

import { useState, useEffect } from 'react';
import Sort from './Sort';
import CardList from './CardList';
import CardForm from './CardForm';
import CardModal from './CardModal';
import Navbar from './Navbar';
import { Context } from './Context';

const Landing = () => {
  // works with useEffect to pull cards from db.json and set to state
  const [cards, setCards] = useState(null);
  // view conditionally renders non-Navbar content: CardList = 0, CardForm = 1, CardModal = 2
  const [view, setView] = useState(0);
  // feeds card to context for CardModal
  const [curCard, setCurCard] = useState(null);
  // watches for update to json server, increments by one for dependency array
  const [update, setUpdate] = useState(0);
  // sets default card viewer image
  const [cardUrl, setCardUrl] = useState(
    'https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1562636810'
  );
  // tracks current query string (defaults to all cards)
  const [query, setQuery] = useState('http://localhost:8000/cards');

  // fetches cards from db.json and sets them to state
  useEffect(() => {
    fetch(query)
      .then((res) => {
        return res.json();
      })
      .then((data) => setCards(data))
      .catch((err) => alert(err.message));
  }, [update, query]);

  // sets view for "card-viewer"
  const dispatchCardView = (dispatchedCardView) => {
    setCardUrl(dispatchedCardView);
    return;
  };
  // sets view for non-Navbar Landing content
  const dispatchView = (dispatchedView) => {
    setView(dispatchedView);
    return;
  };
  // sets view for CardModal (sets curCard)
  const dispatchCard = (dispatchedCard) => {
    setCurCard(dispatchedCard);
    //console.log(curCard.cardName);
    return;
  };
  // sets update for re-render of card list
  const dispatchUpdate = (dispatchedUpdate) => {
    setUpdate(dispatchedUpdate);
    return;
  };
  // clears card-viewer after card deletion
  const dispatchClearCardView = () => {
    setCardUrl(
      'https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1562636810'
    );
  };

  return (
    <div className="landing-cards-container">
      <Context.Provider
        value={{
          cardUrl,
          dispatchCard,
          view,
          dispatchView,
          curCard,
          dispatchCardView,
          update,
          dispatchUpdate,
          dispatchClearCardView,
          setQuery,
        }}
      >
        <Navbar />
        {cards && <Sort />}
        {cards && view === 0 && <CardList cards={cards} />}
        {!cards && view === 0 && <p>Loading...</p>}
        {view === 2 && <CardModal />}
        {view !== 1 && (
          <div className="card-viewer">
            <img src={cardUrl} alt={'derp...'} />
          </div>
        )}
        {view === 1 && <CardForm />}
      </Context.Provider>
    </div>
  );
};

export default Landing;

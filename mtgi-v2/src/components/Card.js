import { useContext } from 'react';
import { Context } from './Context';

const Card = ({ card, url }) => {
  const { dispatchCard, dispatchCardView, dispatchView, setScroll } =
    useContext(Context);

  const handleCardView = (url, card) => {
    // readies CardModal for viewing
    dispatchCard(card);
    dispatchCardView(url);
  };
  const handleCardClick = () => {
    // sets scroll position for return to CardList
    setScroll(window.scrollY);
    setTimeout(() => {
      // changes view to CardModal
      dispatchView(2);
    }, 10);
  };

  return (
    <div className="card-data">
      <p
        className="card-data-name"
        onMouseEnter={() => handleCardView(url, card)}
        onClick={() => handleCardClick()}
      >
        {card.cardName}
      </p>
    </div>
  );
};

export default Card;

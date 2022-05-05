import { useContext } from 'react';
//import { Link } from 'react-router-dom';
import { Context } from './Context';
//import CardModal from './CardModal';

const Card = ({ card, url }) => {
  const { dispatchCard, dispatchCardView, dispatchView } = useContext(Context);

  const handleCardView = (url, card) => {
    dispatchCard(card);
    dispatchCardView(url);
  };
  const handleCardClick = () => {
    setTimeout(() => {
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

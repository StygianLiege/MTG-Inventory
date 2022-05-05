import { Context } from './Context';
import { useContext } from 'react';

const CardModal = () => {
  const {
    curCard,
    update,
    dispatchUpdate,
    dispatchView,
    dispatchClearCardView,
  } = useContext(Context);
  const handleDelete = () => {
    fetch('http://localhost:8000/cards/' + curCard.id, {
      method: 'DELETE',
    })
      .then(() => {
        dispatchUpdate(update + 1);
        dispatchClearCardView();
        dispatchView(0);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="card-modal">
      <div className="card-modal-container">
        <div className="card-modal-text">
          <p className="card-modal-label">NAME:</p>
          <p className="card-modal-data">{curCard.cardName}</p>
          <p className="card-modal-label">TYPE:</p>
          <p className="card-modal-data">{curCard.cardType}</p>
          <p className="card-modal-label">MANA COST:</p>
          <p className="card-modal-data">{curCard.cardManaCost}</p>
          <p className="card-modal-label">COLOR IDENTITY:</p>
          <p className="card-modal-data">{curCard.cardColorIdentity}</p>
        </div>
        <div className="card-modal-buttons">
          <p className="card-modal-button" onClick={handleDelete}>
            Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardModal;

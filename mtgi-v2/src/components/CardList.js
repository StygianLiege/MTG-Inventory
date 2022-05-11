import Card from './Card';
import { useLayoutEffect, useContext, useEffect } from 'react';
import { Context } from './Context';

const CardList = ({ cards }) => {
  // for tracking scroll position (from Landing)
  const { scroll, setScroll } = useContext(Context);
  useLayoutEffect(() => {
    // sets window scroll position as CardList is rendered
    if (scroll) window.scrollTo(0, scroll);
  });
  useEffect(() => {
    // removes scroll setting once CardList is mounted
    setScroll(null);
    // added line below to kill eslint warning: only needs to fire on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="card-list">
      <div className="card-list-container">
        <h2>Inventory</h2>
        {cards.map((card) => (
          <Card card={card} url={card.cardUrl} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;

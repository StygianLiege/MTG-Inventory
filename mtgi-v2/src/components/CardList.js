import Card from './Card';
//import Sort from './Sort';

const CardList = ({ cards }) => {
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

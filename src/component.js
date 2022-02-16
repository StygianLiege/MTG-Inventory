import React, { Component } from 'react';

const CollectionHeader = () => {
  return (
    <thead>
      <tr>
        <th>Card Name</th>
      </tr>
    </thead>
  );
};

const CollectionBody = (props) => {
  const rows = props.cardCollection.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const Collection = (props) => {
  const { cardCollection, removeCard } = props;
  return (
    <table>
      <CollectionHeader />
      <CollectionBody cardCollection={cardCollection} removeCard={removeCard} />
    </table>
  );
};

export default Collection;

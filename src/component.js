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

const CollectionBody = () => {
  return (
    <tbody>
      <tr>
        <td>Swamp</td>
      </tr>
      <tr>
        <td>Island</td>
      </tr>
    </tbody>
  );
};

class Collection extends Component {
  render() {
    return (
      <table>
        <CollectionHeader />
        <CollectionBody />
      </table>
    );
  }
}

export default Collection;

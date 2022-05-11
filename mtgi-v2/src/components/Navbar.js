import { useContext } from 'react';
import logo from '../logo512.png';
import { Context } from './Context';

const Navbar = () => {
  const { dispatchView } = useContext(Context);
  const handlePageView = (view) => {
    dispatchView(view);
  };
  return (
    <div className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
      <p onClick={() => handlePageView(0)} className="navbar-button">
        Inventory
      </p>
      <p onClick={() => handlePageView(1)} className="navbar-button">
        New Card
      </p>
    </div>
  );
};

export default Navbar;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import logo from './logo512.png';
import Landing from './components/Landing';
//import CardForm from './components/CardForm';
//import './App.css'; /*=> moved to index.css*/
//import CardModal from './components/CardModal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <div className="navbar">
          <img src={logo} className="App-logo" alt="logo" />

          <Link to="/newcard" className="add-card-link">
            Add Card
          </Link>
        </div> */}
        <div className="App-content">
          <Routes>
            {/* <div className="navbar">
              <img src={logo} className="App-logo" alt="logo" />

              <Link to="/newcard" className="add-card-link">
                Add Card
              </Link>
            </div> */}
            <Route exact path="/" element={<Landing />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

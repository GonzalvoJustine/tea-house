import React from 'react';
import './style/App.scss';
import imageCommande from './images/commande.jpg';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import Nav from './components/Nav';

function App() {

  return (
    <BrowserRouter>
      <div className='App container'>

        {/* Title and Navigation */}
        <h1 className='text-center my-3 mb-5' >Tea House</h1>
        <Nav/>
        {/* Title and Navigation end */}


        <div className='row'>

          {/* Display this menus shop */}
          <div className='col'>
            <Router/>
          </div>
          {/* Display this menus shop end */}

          {/* Display this image promo and title promo */}
          <div className='col'>
            <h2 className='text-center my-3 mb-5'>Faîtes-vous plaisir !</h2>
            <div className='d-flex justify-content-center align-items-center'>
              <img className='my-3 mb-5' src={imageCommande}
                   alt="nana qui a commandé une boisson"
                   width='500' height='400'
              />
            </div>
          </div>
          {/* Display this image promo and title promo end */}

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Page "Accueil"
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home () {

  return (
    <div className="container">
      <h2 className='text-center h3 my-3 mb-5'>
        Bienvenue au Tea House, venez déguster les meilleurs thés de France !
      </h2>
      <Link to='/shop' className='d-flex justify-content-center'>
        <button className='btn-cmd' onClick={handleClick}>Commander</button>
      </Link>
    </div>
  );

  function handleClick() {
    return !!handleClick;
  }

}

import React from 'react';

/**
 * Page "Remerciement"
 * @returns {JSX.Element}
 * @constructor
 */
export default function Cart () {
  return (
    <div className="container">
      <h2 className='text-center h3 my-3 mb-5'>
        Votre commande a bien été accepté !
      </h2>
      <p className='text-justify'>
        Nous vous remercions de votre achat, vous allez prochainement recevoir un mail !
      </p>
    </div>
  );
}

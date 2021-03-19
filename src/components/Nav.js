import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/**
 * Navigation
 * @returns {JSX.Element}
 * @constructor
 */
export default function Nav () {

  const [button, setButton] = React.useState(false);
  const [buttonTwo, setButtonTwo] = React.useState(false);
  const [buttonThree, setButtonThree] = React.useState(false);
  console.log(setButton);
  console.log(setButtonTwo);
  console.log(setButtonThree);

  const dispatchMethod = useDispatch();

  function addLink(text) {
    dispatchMethod({type: 'ADD_LINK', text: text});
  }
  console.log(addLink);

  return (
    <div className="container">
      <div className="breadcrumbs">
        <ul className="steps">
          <li className="step"><NavLink to="/">Accueil</NavLink></li>
          {button
            ? <li className="step"><NavLink to="/shop">Vente</NavLink></li>
            : <li></li>
          }
          {buttonTwo
            ? <li className="step"><NavLink to="/checkout">Mon panier</NavLink></li>
            : <li></li>
          }
          {buttonThree
            ? <li className="step"><NavLink to="/cart">Paiement</NavLink></li>
            : <li></li>
          }
        </ul>
      </div>
    </div>
  );
}

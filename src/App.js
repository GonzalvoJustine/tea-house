import React from 'react';
import './style/App.scss';
import imageCommande from './images/commande.jpg';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

function App() {

  const { products: products } = useSelector(state => state);
  // Filtré les produits, si c'est un dessert, ok dessert, on le décompose
  const desserts = products.filter(product => product.category === 'Desserts');
  const teaGreens = products.filter(product => product.category === 'Thés verts 50cl');
  const teaBlacks = products.filter(product => product.category === 'Thés noirs 50cl');

  return (
    <Router>
      <div className='App container'>

        <NavLink to="/"><h1 className='text-center my-3 mb-5' >Tea House</h1></NavLink>

        <div className="breadcrumbs">
          <ul className="steps">
              <li className="step"><NavLink to="/">Accueil</NavLink></li>
              <li className="step"><NavLink to="/shop">Shop</NavLink></li>
              <li className="step"><NavLink to="/cart">Cart</NavLink></li>
              <li className="step"><NavLink to="/checkout">Checkout</NavLink></li>
          </ul>
        </div>

        <div className='row'>
          <div className='col'>
            <h2 className='text-center my-3 mb-5'>Menu </h2>

            <nav>
              <ul>
                <li className='list-unstyled'>
                  <NavLink to="/" activeClassName='Header__link--active'>Tous</NavLink>
                </li>
                <li className='list-unstyled'>
                  <NavLink to="/desserts" activeClassName='Header__link--active'>Desserts</NavLink>
                </li>
                <li className='list-unstyled'>
                  <NavLink to="/thes-verts-50cl" activeClassName='Header__link--active'>Thés verts</NavLink>
                </li>
                <li className='list-unstyled'>
                  <NavLink to="/thes-noirs-50cl" activeClassName='Header__link--active'>Thés noirs</NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/" exact={true}>
                {products.map((product, index) => (
                  <table className='table table-hover row' key={index}>
                    <tbody className='col'>
                      <div className='container'>
                        <tr className='row'>
                          <td className='col'>{product.name}</td>
                          <td className='col-2'>{product.price}</td>
                          <td className='col-1'>{product.quantity}</td>
                        </tr>
                      </div>
                    </tbody>
                  </table>
                ))}
              </Route>
              <Route path="/desserts">
                {desserts.map((dessert, index) => (
                  <table className='table table-hover row' key={index}>
                    <tbody className='col'>
                      <div className='container'>
                        <tr className='row'>
                          <td className='col'>{dessert.name}</td>
                          <td className='col-2'>{dessert.price}</td>
                          <td className='col-1'>{dessert.quantity}</td>
                        </tr>
                      </div>
                    </tbody>
                  </table>
                ))}
              </Route>
              <Route path="/thes-verts-50cl">
                {teaGreens.map((teaGreen, index) => (
                  <table className='table table-hover row' key={index}>
                    <tbody className='col'>
                      <div className='container'>
                        <tr className='row'>
                          <td className='col'>{teaGreen.name}</td>
                          <td className='col-2'>{teaGreen.price}</td>
                          <td className='col-1'>{teaGreen.quantity}</td>
                        </tr>
                      </div>
                    </tbody>
                  </table>
                ))}
              </Route>
              <Route path="/thes-noirs-50cl">
                {teaBlacks.map((teaBlack, index) => (
                  <table className='table table-hover row' key={index}>
                    <tbody className='col'>
                      <div className='container'>
                        <tr className='row'>
                          <td className='col'>{teaBlack.name}</td>
                          <td className='col-2'>{teaBlack.price}</td>
                          <td className='col-1'>{teaBlack.quantity}</td>
                        </tr>
                      </div>
                    </tbody>
                  </table>
                ))}
              </Route>
            </Switch>
          </div>
          <div className='col'>
            <h2 className='text-center my-3 mb-5'>Faîtes-vous plaisir !</h2>
            <div className='d-flex justify-content-center align-items-center'>
              <img className='my-3 mb-5' src={imageCommande}
                   alt="nana qui a commandé une boisson"
                   width='500' height='400'
              />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

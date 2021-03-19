import React from 'react';
import {Link, NavLink, Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

/**
 * Page "Shop"
 * @returns {JSX.Element}
 * @constructor
 */
export default function Shop () {

  const { products: products } = useSelector(state => state);

  // Filter the products, if it is a desserts, ok dessert, else decompose
  const desserts = products.filter(product => product.category === 'Desserts');
  const teaGreens = products.filter(product => product.category === 'Thés verts 50cl');
  const teaBlacks = products.filter(product => product.category === 'Thés noirs 50cl');

  const dispatchMethod = useDispatch();

  function add(index) {
    dispatchMethod({type: 'ADD', index: index});
  }

  return (
    <div className="container">
      <h2 className='text-center my-3 mb-5'>Menu</h2>

      <nav>
        <ul>
          <li className='list-unstyled'>
            <NavLink to="/shop" activeClassName='Header__link--active'>Tous</NavLink>
          </li>
          <li className='list-unstyled'>
            <NavLink to="/shop/desserts" activeClassName='Header__link--active'>Desserts</NavLink>
          </li>
          <li className='list-unstyled'>
            <NavLink to="/shop/thes-verts-50cl" activeClassName='Header__link--active'>Thés verts</NavLink>
          </li>
          <li className='list-unstyled'>
            <NavLink to="/shop/thes-noirs-50cl" activeClassName='Header__link--active'>Thés noirs</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/shop" exact={true}>
          {products.map((product, index) => (
            <table className='table table-hover row' key={index}>
              <tbody className='col'>
              <div className='container'>
                <tr className='row'>
                  <td className='col'>{product.name}</td>
                  <td className='col-2'>{product.price}</td>
                  <td className='col-1'>{product.quantity}</td>
                  <td>
                    <button onClick={() => add(index)}>+</button>
                  </td>
                </tr>
              </div>
              </tbody>
            </table>
          ))}
        </Route>
        <Route path="/shop/desserts">
          {desserts.map((dessert, index) => (
            <table className='table table-hover row' key={index}>
              <tbody className='col'>
              <div className='container'>
                <tr className='row'>
                  <td className='col'>{dessert.name}</td>
                  <td className='col-2'>{dessert.price}</td>
                  <td className='col-1'>{dessert.quantity}</td>
                  <td>
                    <button onClick={() => add(index)}>+</button>
                  </td>
                </tr>
              </div>
              </tbody>
            </table>
          ))}
        </Route>
        <Route path="/shop/thes-verts-50cl">
          {teaGreens.map((teaGreen, index) => (
            <table className='table table-hover row' key={index}>
              <tbody className='col'>
              <div className='container'>
                <tr className='row'>
                  <td className='col'>{teaGreen.name}</td>
                  <td className='col-2'>{teaGreen.price}</td>
                  <td className='col-1'>{teaGreen.quantity}</td>
                  <td>
                    <button onClick={() => add(index)}>+</button>
                  </td>
                </tr>
              </div>
              </tbody>
            </table>
          ))}
        </Route>
        <Route path="/shop/thes-noirs-50cl">
          {teaBlacks.map((teaBlack, index) => (
            <table className='table table-hover row' key={index}>
              <tbody className='col'>
              <div className='container'>
                <tr className='row'>
                  <td className='col'>{teaBlack.name}</td>
                  <td className='col-2'>{teaBlack.price}</td>
                  <td className='col-1'>{teaBlack.quantity}</td>
                  <td>
                    <button onClick={() => add(index)}>+</button>
                  </td>
                </tr>
              </div>
              </tbody>
            </table>
          ))}
        </Route>
      </Switch>
      <Link to='/checkout' className='d-flex justify-content-center mt-5'>
        <button className='btn-cmd'>Ma commande</button>
      </Link>
    </div>
  );
}

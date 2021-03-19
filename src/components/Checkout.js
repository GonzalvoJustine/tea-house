import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

/**
 * Page "Shop"
 * @returns {JSX.Element}
 * @constructor
 */
export default function Checkout () {

  const { products: products } = useSelector(state => state);

  // Filter the products, if it is a desserts, ok dessert, else decompose
  const desserts = products.filter(product => product.category === 'Desserts');
  const teaGreens = products.filter(product => product.category === 'Thés verts 50cl');
  const teaBlacks = products.filter(product => product.category === 'Thés noirs 50cl');

  const dispatchMethod = useDispatch();

  function add(index) {
    dispatchMethod({type: 'ADD', index: index});
  }

  function substract(index) {
    dispatchMethod({type: 'SUBSTRACT', index: index});
  }

  return (
    <div className="container">
      <h2 className='text-center my-3 mb-5'>Mon panier</h2>

      <div>
        {desserts[0].quantity || desserts[1].quantity
          ? <div>
              <h3>Desserts</h3>

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
                        <button onClick={() => substract(index)}>-</button>
                      </td>
                    </tr>
                  </div>
                  </tbody>
                </table>
              ))}
          </div>
          : <div></div>
        }
      </div>
      <div>
        {teaGreens[0].quantity || teaGreens[1].quantity || teaBlacks[0].quantity || teaBlacks[1].quantity
          ? <h3>Thés</h3>
          : <div></div>
        }
        {teaGreens[0].quantity || teaGreens[1].quantity
          ? <div>
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
                      <button onClick={() => substract(index)}>-</button>
                    </td>
                  </tr>
                </div>
                </tbody>
              </table>
            ))}
          </div>
          : <div></div>
        }
        {teaBlacks[0].quantity && teaBlacks[1].quantity
          ? <div>

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
                      <button onClick={() => substract(index)}>-</button>
                    </td>
                  </tr>
                </div>
                </tbody>
              </table>
            ))}
          </div>
          : <div></div>
        }
      </div>
      <Link to='/cart' className='d-flex justify-content-center mt-5'><button className='btn-cmd'>Payer</button></Link>
    </div>
  );
}

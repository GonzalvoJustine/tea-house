import React from 'react';
import Home from './Home';
import Shop from './Shop';
import Checkout from './Checkout';
import Cart from './Cart';
import { Route, Switch } from 'react-router-dom';

function Router () {
  return (
    <div>
      <Switch>
        <Route path='/' exact={true}>
          <Home/>
        </Route>
        <Route path='/shop'>
          <Shop/>
        </Route>
        <Route path='/checkout'>
          <Checkout/>
        </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
      </Switch>
    </div>
  );
}

export default Router;

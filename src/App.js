import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Hompage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {Hompage}/>
        <Route path = '/shop' component = {ShopPage}/>
      </Switch>

    </div>
  );
}

export default App;

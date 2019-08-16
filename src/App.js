import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header'
import Hompage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path = '/' component = {Hompage}/>
        <Route path = '/shop' component = {ShopPage}/>
      </Switch>

    </div>
  );
}

export default App;

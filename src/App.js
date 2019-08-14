import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Hompage from './pages/homepage/homepage'
import './App.css';

const HatPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {Hompage}/>
        <Route path = '/shop/hats' component = {HatPage}/>
      </Switch>

    </div>
  );
}

export default App;

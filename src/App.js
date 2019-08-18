import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header'
import Hompage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot( snapShot => {
          const { id } = snapShot
          this.setState({ 
            currentUser: {
              id, 
              ...snapShot.data() 
            }
          })       
        })
      } else {
        this.setState({ currentUser: null })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
    // console.log(user.emailVerified)
  }


  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path = '/' component = {Hompage}/>
          <Route path = '/shop' component = {ShopPage}/>
          <Route path = '/signin' component = {SignInAndSignUp}/>
        </Switch>

      </div>
    );
  }
}

export default App;

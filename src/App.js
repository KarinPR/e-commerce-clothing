import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import Header from './components/header/header'
import Hompage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css';

import { setCurrentUser } from './redux/user/user.actions';

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser : (user) => dispatch(setCurrentUser(user)),
  }
}

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot( snapShot => {
          const { id } = snapShot
          setCurrentUser ({ id, ...snapShot.data() })   
        })
      } else {
        setCurrentUser(null)
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
        <Header/>
        <Switch>
          <Route exact path = '/' component = {Hompage}/>
          <Route path = '/shop' component = {ShopPage}/>
          <Route path = '/signin' component = {SignInAndSignUp}/>
        </Switch>

      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import Header from './components/header/header'

import Hompage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import CheckoutPage from './pages/checkout/checkout'

import { createStructuredSelector } from 'reselect'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors'

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser ,
}   )

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
    const { currentUser } = this.props
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path = '/' component = {Hompage}/>
          <Route path = '/shop' component = {ShopPage}/>
          <Route exact path = '/checkout' component = {CheckoutPage} />
          <Route exact path = '/signin' render = {() => 
            currentUser ? (
              <Redirect to = '/' />
            ) : (
              <SignInAndSignUp />
            )
          }/>
          
        </Switch>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import CartIcon from './../cart-icon/cart-icon'
import CartDropdown from './../cart-dropdown/cart-dropdown'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { auth } from './../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { selectCurrentUser } from './../../redux/user/user.selectors'
import { selectCartHidden } from './../../redux/cart/cart.selectors'
// import SHOP_DATA from './shop-data'

import './header.scss'

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})   

const Header = ({ currentUser, hidden }) => (
	<div className = 'header'>
		<Link className = 'logo-container' to = '/' > 
			<Logo className = 'logo' />
		</Link>
		<div className = 'options'>
			<Link className = 'option' to = '/shop'>
				SHOP
			</Link>
			<Link className = 'option' to = '/shop'>
				CONTACT
			</Link>
			{
				currentUser ?
					<div className = 'option' onClick = {() => auth.signOut()}>
						SIGN OUT
					</div>
				:
					<Link className = 'option' to = '/signin'>
						SIGN IN
					</Link>

			}
			<CartIcon />
		</div>
		{
			hidden ? null : <CartDropdown/>
		}

		
		
	</div>
)

export default connect(mapStateToProps)(Header);
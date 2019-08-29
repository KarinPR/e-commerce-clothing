import React from 'react';
import CartIcon from './../cart-icon/cart-icon'
import CartDropdown from './../cart-dropdown/cart-dropdown'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { auth } from './../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { selectCurrentUser } from './../../redux/user/user.selectors'
import { selectCartHidden } from './../../redux/cart/cart.selectors'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})   

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to = '/' > 
			<Logo className = 'logo' />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to = '/shop'>
				SHOP
			</OptionLink>
			<OptionLink to = '/shop'>
				CONTACT
			</OptionLink>
			{
				currentUser ?
					<OptionLink as = 'div' onClick = {() => auth.signOut()}>
						SIGN OUT
					</OptionLink>
				:
					<OptionLink to = '/signin'>
						SIGN IN
					</OptionLink>
			}
			<CartIcon />
		</OptionsContainer>
		{
			hidden ? null : <CartDropdown/>
		}

		
		
	</HeaderContainer>
)

export default connect(mapStateToProps)(Header);
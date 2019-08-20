import React from 'react';
import { connect } from 'react-redux';

import CartItem from './../cart-item/cart-item'
import CustomButton from './../custom-button/custom-button'
import './cart-dropdown.scss'

const mapStateToProps = ({ cart: { cartItems} }) => {
  return {
    cartItems,
  }
}   

const CartDropdown = ({ cartItems }) => (
	<div className = 'cart-dropdown' >
		<div className = 'cart-items'>
		{
			cartItems.map( (item) => (
				<CartItem
					key = {item.id}
					item = {item}
				/>
			))
		}
		</div>
		<CustomButton> GO TO CHECKOUT</CustomButton>
	</div>
)

export default connect(mapStateToProps)(CartDropdown);
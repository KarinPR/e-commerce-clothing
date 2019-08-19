import React from 'react';
import { connect } from 'react-redux';

import CustomButton from './../custom-button/custom-button'
import './cart-dropdown.scss'

const mapStateToProps = ({ cart }) => {
  return {
    cartItems : cart.cartItems ,
  }
}   

const CartDropdown = ({ cartItems }) => (
	<div className = 'cart-dropdown' >
		<div className = 'cart-items'>
		{
			cartItems.map( (item, index) => (
				<div key = {index}> {item.name} </div>
			))
		}
		</div>
		<CustomButton> GO TO CHECKOUT</CustomButton>
	</div>
)

export default connect(mapStateToProps)(CartDropdown);
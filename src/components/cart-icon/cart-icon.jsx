import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { toggleCartHidden } from './../../redux/cart/cart.actions';
import './cart-icon.scss'
 
const mapStateToProps = ({ cart }) => {
  return {
    cartItems : cart.cartItems ,
  }
}  
 
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden : () => dispatch(toggleCartHidden()),
  }
}

const CartIcon = ({ cartItems, toggleCartHidden }) => (
	<div className = 'cart-icon' onClick = {toggleCartHidden}>
		<ShoppingIcon className = 'shopping-icon'/>
		<span className = 'item-count'> {cartItems.length} </span>
	</div>
)

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
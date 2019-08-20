import React from 'react';
// import { connect } from 'react-redux';
// import SHOP_DATA from './shop-data'
// import CustomButton from './../custom-button/custom-button'

// import { addItem } from './../../redux/cart/cart.actions';
import './cart-item.scss'


const CartItem = ({ item : { name, imageUrl, price, quantity } }) => {
	return (
	<div className = 'cart-item' >
		<img className = 'image' src = {imageUrl} alt = 'item' />
		<div className = 'item-details'>
			<span className = 'name'> { name } </span>
			<span className = 'price'> { quantity } x ${ price } </span>
		</div>	
	</div>
	)
}

export default CartItem;
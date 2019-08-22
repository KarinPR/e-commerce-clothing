import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CheckoutItem from './../../components/checkout-item/checkout-item';
import StripeCheckoutButton from './../../components/stripe-button/stripe-button'

import { selectCartItems, selectCartTotal } from './../../redux/cart/cart.selectors';

import './checkout.scss'

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

const CheckoutPage = ({ cartItems, total }) => (
	<div className = 'checkout-page'>
		<div className = 'checkout-header'>
			<div className = 'header-block'>
				<span>Product</span>
			</div>
			<div className = 'header-block'>
				<span>Description</span>
			</div>
			<div className = 'header-block'>
				<span>Quantity</span>
			</div>
			<div className = 'header-block'>
				<span>Price</span>
			</div>
			<div className = 'header-block'>
				<span>Remove</span>
			</div>
		</div>
		{
			cartItems.map( (cartItem) => (
				<CheckoutItem
					key = {cartItem.id}
					cartItem = {cartItem}
				/>
			))
		}
		<div className = 'total'> <span> TOTAL: $ {total} </span> </div>
		<div className = 'test-warning'>
			<span>**</span> Please use the following <span>test credit card</span> for payments <span>**</span>
			<br/>
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</div>
		<StripeCheckoutButton price = {total}/>
	</div>
)

export default connect(mapStateToProps)(CheckoutPage);
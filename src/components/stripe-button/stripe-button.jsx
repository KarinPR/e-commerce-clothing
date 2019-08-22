import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_WM3lTN6tsPcH84KVIYLvb2at00N1EyEwbX';

	const onToken = token => {
		console.log(token)
		alert('Payment Successful')
	} // Neccesary to process payment 

	return (
		<StripeCheckout 
			label = 'Pay Now'
			name = 'Karin Awsome Ltd.'
			billingAddress
			shippingAddress
			image = 'http://svgshare.com/i/CUz.svg'
			description = {`Your total is $${price}`}
			amount = {priceForStripe}
			panelLabel = 'Pay Now'
			token = {onToken}
			stripeKey = {publishableKey}
		/>
	)
}

export default StripeCheckoutButton;
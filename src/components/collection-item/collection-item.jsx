import React from 'react';
import { connect } from 'react-redux';
// import SHOP_DATA from './shop-data'
import CustomButton from './../custom-button/custom-button'

import { addItem } from './../../redux/cart/cart.actions';
import './collection-item.scss'

const mapDispatchToProps = (dispatch) => {
  return {
    addItem : (item) => dispatch(addItem(item)),
  }
}

const CollectionItem = ({ item , addItem }) => {
	const { name, imageUrl, price } = item
	return (
	<div className = 'collection-item' >
		<div className = 'image' style = {{backgroundImage: `url(${imageUrl})`}} />
		<div className = 'collection-footer'>
			<span className = 'name'> { name } </span>
			<span className = 'price'>  ${ price } </span>
		</div> 
		<CustomButton inverted onClick = {() => addItem(item)} > Add to Cart </CustomButton>	
	</div>
	)
}

export default connect(null , mapDispatchToProps)(CollectionItem);
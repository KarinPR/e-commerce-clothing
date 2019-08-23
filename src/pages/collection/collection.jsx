import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from './../../components/collection-item/collection-item'
import { selectCollection } from './../../redux/shop/shop.selectors';

import './collection.scss'

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
})

const CollectionPage = ({ collection }) => {
	return (
	<div className = 'collection-page'>
		<h2 className = 'title'> {collection.title} </h2>
		<div className = 'items'>
			{
				collection.items.map((item) => (
					<CollectionItem  key = {item.id} item = {item} />
				))
			}
		</div>
	</div>
)}

export default connect(mapStateToProps)(CollectionPage);
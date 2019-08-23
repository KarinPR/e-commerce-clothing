import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview'
import { selectCollectionsForPreview } from './../../redux/shop/shop.selectors'

import './collections-overview.scss'

const mapStateToProps = createStructuredSelector ({
    collections : selectCollectionsForPreview ,
})

const CollectionsOverview = ({ collections, match, history }) => (
	<div className = 'collections-overview'>
		{
			collections.map(( { id, ...otherCollectionProps }) => (
				<CollectionPreview key = {id} match = {match} history = {history} {...otherCollectionProps} />
			))

		}
	</div>
)

export default connect(mapStateToProps)(CollectionsOverview);
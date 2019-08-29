import React from 'react';
import CollectionItem from '../collection-item/collection-item'

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles'


const CollectionPreview = ({ title, items, match, history }) => {
	// console.log(otherCollectionProps)
	return (
	
	<CollectionPreviewContainer>
		<TitleContainer onClick = {() => history.push(`${match.url}/${title.toLowerCase()}`)}> {title.toUpperCase()} </TitleContainer>
		<PreviewContainer>
			{
				items
				.filter((item, index) => ( index < 4 ))
				.map((item) => (
					<CollectionItem key = {item.id} item = {item} />
				))
			}
		</PreviewContainer>
	</CollectionPreviewContainer>
)}

export default CollectionPreview;
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import MenuItem from './../menu-item/menu-item'

import { selectDirectorySections } from './../../redux/directory/directory.selectors'

import './directory.scss'

const mapStateToProps = createStructuredSelector ({
    sections : selectDirectorySections ,
})

const Directory = ({ sections }) => (
	<div className = 'directory-menu'>
		{
			sections.map( ({ id, ...otherSectionProps}) => {
				return (
					<MenuItem 
						key = {id}
						{...otherSectionProps}
					/>
				)
			})
		}
	</div> 			
);

export default connect(mapStateToProps)(Directory);
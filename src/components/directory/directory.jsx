import React from 'react';
import MenuItem from './../menu-item/menu-item'

import {sections} from './directory.data'
import './directory.scss'

class directory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sections: []
		}
	}

	componentDidMount() {
		this.setState({sections : sections})	
	}

	render() {
		return (
			<div className = 'directory-menu'>
				{
					this.state.sections.map( ({title, imageUrl, id, size}) => {
						return (
							<MenuItem 
								key = {id}
								title = {title}
								img = {imageUrl}
								size = {size}
							/>
						)
					})
				}
			</div> 			
		);
	}
}

export default directory;
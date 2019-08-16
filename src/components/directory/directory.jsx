import React from 'react';
import MenuItem from './../menu-item/menu-item'

import {sections} from './directory.data'
import './directory.scss'

class Directory extends React.Component {
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
					this.state.sections.map( ({ id, ...otherSectionProps}) => {
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
	}
}

export default Directory;
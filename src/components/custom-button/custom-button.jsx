import React from 'react';

import { CustomButtonContainer } from './custom-button.styles'
// import './custom-button.scss'

const CustomButton = ({ children,  ...otherProps }) => (
	<CustomButtonContainer className = 'custom-button' {...otherProps}>
		{children}
	</CustomButtonContainer>
)

export default CustomButton
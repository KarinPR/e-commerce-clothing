import styled, { css } from 'styled-components'

const buttonStyles = css`
	background-color: #07AA1B;
	color: white;
	
	&:hover {
		background-color: white;
		color: #07AA1B;
		border: 2px solid #07AA1B;
	}
`
const invertedButtonStyles = css`
    background-color: white;
    color: #07AA1B;
    border: 2px solid #07AA1B;

    &:hover{
      background-color: #07AA1B;
      color: white;
      border: none;
    }
`
const GoogleSignInStyles = css`
    background-color: #0F9D58; 
    color: white;

    &:hover{
      background-color: #006132;
      border: none;
    }
`

const getButtonStyles = props => {
	if (props.isGoogleSignIn) {
		return GoogleSignInStyles
	}
	return props.inverted ? invertedButtonStyles : buttonStyles

}

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 1px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	border: none;
	text-transform: uppercase;
	font-family: 'Roboto Condensed', sans-serif;
	font-weight: 900;
	cursor: pointer;
	display: flex;
	justify-content: center;


	${getButtonStyles}
`
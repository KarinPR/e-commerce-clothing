import React from 'react';

import FormInput from './../form-input/form-input'
import CustomButton from './../custom-button/custom-button'

import { auth, createUserProfileDocument } from './../../firebase/firebase.utils'

import './sign-up.scss'

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		
		const { name, email, password, confirmPassword } = this.state
		// console.log(name)
		if (password !== confirmPassword) {
			alert("passwords don't match")
			return;
		}
		
		try {	
			const { user } = await auth.createUserWithEmailAndPassword(email, password)
			await createUserProfileDocument(user, { name })
			this.setState({ 			
				name: '',
				email: '',
				password: '',
				confirmPassword: ''
			})
			console.log('Sign-up succeeded');
		} catch (error) {
			console.log('Sign-up', error.message);
		}
	}

	handleChange = (event) => {
		const { value, name } = event.target
		this.setState({ [name] : value})
	}


	render() {
		const { name, email, password, confirmPassword } = this.state
		return (
			<div className = 'sign-up'>
				<h2 className = 'title'> I do not have an account </h2>
				<span> Sign up with your email and password</span>

				<form className = 'sign-up-form' onSubmit = {this.handleSubmit}>
					<FormInput name = 'name' type = 'text' value = {name} handleChange = {this.handleChange} label = 'Name' required/>
					<FormInput name = 'email' type = 'email' value = {email} handleChange = {this.handleChange} label = 'Email' required/>
					<FormInput name = 'password' type = 'password' value = {password} handleChange = {this.handleChange} label = 'Password' required/>
					<FormInput name = 'confirmPassword' type = 'password' value = {confirmPassword} handleChange = {this.handleChange} label = 'Confirm Password' required/>
					<div className = 'buttons'>
						<CustomButton type = 'submit'> Sign up </CustomButton>
					</div>
				</form>
			</div> 			
		);
	}
}

export default SignUp;
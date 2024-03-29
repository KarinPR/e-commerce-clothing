import React from 'react';
import SignIn from './../../components/sign-in/sign-in'
import SignUp from './../../components/sign-up/sign-up'

// import { auth, createUserProfileDocument } from './../../firebase/firebase.utils'

// import {sections} from './directory.data'
import './sign-in-and-sign-up.scss'

const SignInAndSignUpPage = () => (
	<div className = 'sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
)

export default SignInAndSignUpPage;
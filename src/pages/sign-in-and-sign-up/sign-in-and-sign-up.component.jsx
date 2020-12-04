import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss'

// We make this a functional compenent because we don't need any lifecycle methods or to store any state
const SignInAndSignUpPage = () =>(
    <div className="sign-in-and-sign-up">
       <SignIn/>
    </div>
)

export default SignInAndSignUpPage;
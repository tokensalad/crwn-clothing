import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss'

class SignUp extends React.Component{
    constructor(){
      super();
  
      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        this.setState({ email: '', password: ''})
        if(password!==confirmPassword){
            alert('passwords do not match');
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                  }
            );

        }catch (error){
            console.error(error);
        }
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title" >I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text" value={displayName} handleChange={this.handleChange} label="Display Name" required />
                    <FormInput name="email" type="email" value={email} handleChange={this.handleChange} label="email" required />
                    <FormInput name="password" type="password" handleChange={this.handleChange} label="password" value={password} required />
                    <FormInput name="confirmPassword" type="password" handleChange={this.handleChange} label="confrim password" value={confirmPassword} required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
        
            </div>
        )
    }
}

export default SignUp;
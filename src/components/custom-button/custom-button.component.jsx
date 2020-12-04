import React from 'react';

import './custom-button.styles.scss'

// We make this a functional compenent because we don't need any lifecycle methods or to store any state
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) =>(
    <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;
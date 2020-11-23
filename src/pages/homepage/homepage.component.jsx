import React from 'react';

import Directory from '../../components/directory/directory.component'

import './homepage.styles.scss'

// We make this a functional compenent because we don't need any lifecycle methods or to store any state
const HomePage = () =>(
    <div className="homepage">
       <Directory/>
    </div>
)

export default HomePage;
import React from 'react';

import './menu-item.styles.scss'

// We make this a functional compenent because we don't need any lifecycle methods or to store any state
const MenuItem = ({title, imageUrl, size}) =>(
    <div className={`${size} menu-item`}>
        <div className='background-image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;
import React from 'react'
import { render } from 'react-dom';

import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'; 

// In this case we will need state so we have a class component
class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA,
        }
    }


    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))}
            </div>
        )
    }
}

export default ShopPage;
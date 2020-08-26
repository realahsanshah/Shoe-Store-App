import React from 'react';
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
    const {productId}=useParams();
    return ( 
        <h4>Product details of {productId}</h4>
     );
}
 
export default ProductDetails;
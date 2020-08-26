import React from 'react'
import {Outlet} from 'react-router-dom';


const Products = () => {
    return ( 
        <div className='row'>
            <div className='col-8'>
            <h3>Products</h3>
            </div>
            <div className='col-4'>
                <Outlet>

                </Outlet>
            </div>
        </div>
     );
}
 
export default Products;
import React,{useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import {Media,Button} from 'reactstrap';
import {ShoeContext} from '../contexts/ShoeContext';
import {removeFromCart,checkOut} from '../reducers/ActionTypes'
import {Paper} from '@material-ui/core';


const Cart = () => {
    let {cartItems,dispatch}=useContext(CartContext);
    const {shoes}=useContext(ShoeContext)
    const data=cartItems.map((productId)=>{
        let shoe=shoes[productId];
        return (
            <Paper elevation={3}>
            <Media tag='li'>
                    <Media object src={shoe.img} alt={shoe.name} className="mr-5" heigth={105} width={105}/>
                    <Media body>
                    <Media heading>
                        {shoe.name}
                    </Media>
                        {"Price:"+shoe.price}
                        <br/><br/>
                    </Media>
                    <Button className='btn btn-primary fa fa-minus' onClickCapture={()=>{
                          dispatch({
                                type:removeFromCart,
                                productId:productId
                            })
                    }}></Button>
            </Media>
            </Paper>
        )
    });
    return ( 
        <div>
            <h3>Cart</h3>
            <div className="col-12 col-md-6">
                
                <Media list className="mt-5">
                    {data?data:"Cart is empty"}
                </Media>
                <Button className='btn btn-outline' onClick={()=>{
                    dispatch({
                                type:checkOut
                            })
                }}>Check Out</Button>
            </div>
        </div>
     );
}
 
export default Cart;
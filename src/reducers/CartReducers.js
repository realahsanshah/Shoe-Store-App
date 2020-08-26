import {addIntoCart,removeFromCart,checkOut} from './ActionTypes'

export const CartReducer=(state,action)=>{
    switch(action.type){
        case addIntoCart:
            if(!state.some(productId=>  productId===action.productId)){
                console.log(`state is ${state} and action ${action.productId}`);
              return [...state,action.productId];
            }
            else{
                alert("Item already in the cart");
                return state;
            }

        case removeFromCart:
            state=state.filter(productId=>productId!==action.productId);
            return state;

            case checkOut:
                state=[];
                return state;
        default:
            return state;
    }
}
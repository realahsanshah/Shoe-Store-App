import {addIntoCart,removeFromCart} from './ActionTypes'

export const CartReducer=(state,action)=>{
    switch(action.type){
        case addIntoCart:
                console.log(`state is ${state}`);
              return [state.push({
                id: action.id
            })]

        case removeFromCart:
            state=state.filter(dish=>dish.id!==action.id);
            return state;

        default:
            return state;
    }
}
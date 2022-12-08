import CartContext from "./cart-context";
import {useReducer} from 'react'

const defaultCartState = {
    items:[]
}
const cartReducer = (state, action)=>{
    if(action.type === "ADD"){
        const existingCartItemIndex = state.items.findIndex(item=>{
            return item.id === action.item.id
        })
        const existingCartItem = state.items[existingCartItemIndex]
        
        let updatedItems;
        if (existingCartItem){
            updatedItems = [...state.items]
        }
        else{
            updatedItems = state.items.concat(action.item)
        }
        return {
            items:updatedItems
        }
    }
    else if(action.type === "REMOVE"){ 
        const existingCartItemIndex = state.items.findIndex(item=>{
            return item.id === action.id
        })
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems;
        if(existingCartItem){
            updatedItems = state.items.filter(item=>{
                return item.id !== action.id
            })
        }
        else{
            updatedItems = [...state.items]
        }
        return {
            items:updatedItems
        }
    }
    return defaultCartState
}
const CartProvider = props =>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = item =>{
        dispatchCartAction({type: 'ADD', item:item})
    }
    const removeItemFromCartHandler = id =>{
        dispatchCartAction({type: 'REMOVE',id:id})
    }
    const cartContext = {
        items:cartState.items,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;
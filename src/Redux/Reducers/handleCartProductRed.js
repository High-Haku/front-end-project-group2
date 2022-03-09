import { ADD_ITEM, DEL_ITEM } from "../Actions/cartProductAct";

const cart = [];

const handleCart = (state = cart, action) => {
    let total = 0;
    const product = action.payload;
    switch (action.type){
        case ADD_ITEM:
            // Check if the product is already exist
            const exist = state.find((item) => item.id === product.id)
            console.log(exist);
            if(exist){
                // Increase the quantity
                return state.map((item) => 
                    item.id === product.id ? {...item, qty: item.qty + 1, total: (item.qty+1) * item.price} : item
                );
            } 
            // Check if the product not exist, then add product to cart +1
            else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty: 1,
                        total: product.price,
                    }
                ]
            }
        case DEL_ITEM:
            const itemExist = state.find((item) => item.id === product.id);
            if(itemExist.qty === 1){
                return state.filter((item) => item.id !== itemExist.id);
            }
            else{
                return state.map((item) => 
                    item.id === product.id ? {...item, qty: item.qty-1, total: (item.qty-1) * item.price} : item
                );
            }
        default:
            return state;
    }
}

export default handleCart;
export const ADD_ITEM = 'ADD_ITEM'
export const DEL_ITEM = 'DEL_ITEM' // DEL = DELETE
export const ADD_DELIVERY = 'ADD_DELIVERY'
export const UN_ADD_DELIVERY = 'UN_ADD_DELIVERY'

export const addCart = (product) => {
    return{
        type: ADD_ITEM,
        payload: product,
    }
}

export const delCart = (product) => {
    return{
        type: DEL_ITEM,
        payload: product,
    }
}

export const addDelivery = () => {
    return{
        type: ADD_DELIVERY,
    }
}

export const unAddDelivery = () => {
    return{
        type: UN_ADD_DELIVERY,
    }
}
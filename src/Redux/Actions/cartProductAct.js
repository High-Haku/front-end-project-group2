export const ADD_ITEM = 'ADD_ITEM'
export const DEL_ITEM = 'DEL_ITEM' // DEL = DELETE

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
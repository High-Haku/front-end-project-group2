import { GET_DATA_REQ, GET_DATA_REJECTED, GET_DATA_SUCCESS } from "../Actions/getAPICatShopAct";

const initialState = {
    data: [],
    error: null,
    isLoading: false,
}

export const getAPICatShopRed = (state = initialState, action) => {
    switch (action.type){
        case GET_DATA_REQ:
            return{
                ...state,
                isLoading: true,
            }
        case GET_DATA_REJECTED:
            return{
                ...state,
                isLoading: false,
                data: action.error,
            }
        case GET_DATA_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: action.payload,
            }
        default:
            return state;
    }
}
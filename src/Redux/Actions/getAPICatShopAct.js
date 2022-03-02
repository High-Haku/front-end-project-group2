import axios from "axios";
import { useParams } from "react-router-dom";

export const GET_DATA_REQ = 'GET_DATA_REQ';
export const GET_DATA_REJECTED = 'GET_DATA_REJECTED';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

export const getDataCatShopReq = () => {
    return{
        type: GET_DATA_REQ,
    }
};

export const getDataCatShopRej = (error) => {
    return{
        type: GET_DATA_REJECTED,
        payload: error,
    }
}

export const getDataCatShopSuc = (data) => {
    return{
        type: GET_DATA_SUCCESS,
        payload: data,
    }
}

export const getAPICatShopAct = () => {
    return function (dispatch) {
        dispatch(getDataCatShopReq());

        axios
        .get("https://6215ac43c9c6ebd3ce2e4ad8.mockapi.io/stuff")
        .then((result)=>dispatch(getDataCatShopSuc(result.data)))
        .catch((error)=>dispatch(getDataCatShopRej(error)))
    }
}

export const getAPICatShopSingleDataAct = () => {
    return function (dispatch) {
        const {id} = useParams();
        dispatch(getDataCatShopReq());

        axios
        .get(`https://6215ac43c9c6ebd3ce2e4ad8.mockapi.io/stuff/${id}`)
        .then((result)=>dispatch(getDataCatShopSuc(result.data)))
        .catch((error)=>dispatch(getDataCatShopRej(error)))
    }
}
import axios from "axios";

export const GET_CAT_REQUEST = "GET_CAT_REQUEST";
export const GET_CAT_SUCCESS = "GET_CAT_SUCCESS";

export const getCatRequest = () => {
  return {
    type: GET_CAT_REQUEST,
  };
};

export const getCatSuccess = (data) => {
  return {
    type: GET_CAT_SUCCESS,
    payload: data,
  };
};

export const getCatAction = () => {
  return async function (dispatch) {
    dispatch(getCatRequest());

    const result = await axios.get("https://api.thecatapi.com/v1/breeds");

    dispatch(getCatSuccess(result.data));
  };
};

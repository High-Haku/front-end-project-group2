import { GET_CAT_REQUEST, GET_CAT_SUCCESS } from "../Actions/catListAction";

const initialState = {
  data: [],
  isLoading: false,
};

const catListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CAT_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default catListReducer;

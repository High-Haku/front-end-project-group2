import handleCart from "./handleCartProductRed";
import { combineReducers } from "redux";
import catListReducer from "./catListReducer";

const rootReducers = combineReducers({handleCart, catListReducer});
export default rootReducers;
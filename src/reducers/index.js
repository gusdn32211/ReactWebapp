import { combineReducers } from "redux";

import fetchData from "./fetchDataReducer";
import login from "./loginReducer";
import register from "./registerReducer";

export default combineReducers({
	fetchData: fetchData,
	login,
	register
})


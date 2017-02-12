import { combineReducers } from "redux";

import fetchData from "./fetchDataReducer"

const userReducer = (state={}, action) => {
	switch(action.type) {
		case "CHANGE_NAME": {
			state = {...state, name: action.payload}
			break;
		}
		case "CHANGE_AGE": {
			state = {...state, age: action.payload}
			break;
		}
	}
	return state;
};

export default combineReducers({
	fetchData,
	user: userReducer,
})


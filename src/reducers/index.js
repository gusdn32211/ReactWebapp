import { combineReducers } from "redux";

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
		case "TEST_ERROR": {
			throw new Error(action.payload)
		}
	}
	return state;
};


const tweetsReducer = (state=[], action) => {
	return state;
};

export const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer,
})


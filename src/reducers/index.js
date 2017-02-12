import { combineReducers } from "redux";

const initialState= {
	fetching: false,
	fetched: false,
	users: [],
	error: null,
}

const fetchDataReducer = (state=initialState, action) => {
	switch(action.type) {
		case "FETCH_DATA_PENDING": {
			return {...state, fetching: true}
			break;
		}
		case "FETCH_DATA_REJECTED": {
			return {...state, fetching: false, error: action.payload}
			break;
		}
		case "FETCH_DATA_FULFILLED": {
			return {...state,
				fetching: false,
				fetched: true,
				users: action.payload.data
			}
			break;
		}
	}
	return state;
};

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

export const reducers = combineReducers({
	data: fetchDataReducer,
	user: userReducer,
})


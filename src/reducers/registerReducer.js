const initialState= {
	username: "",
	email: "",
	password: "",
	timezone: ""
}

const registerReducer = (state=initialState, action) => {
	switch(action.type) {
		case "SET_USER_NAME_REGISTER": {
			return {...state, username: action.payload}
			break;
		}
		case "SET_USER_PASSWORD_REGISTER": {
			return {...state, password: action.payload}
			break;
		}
		case "SET_USER_EMAIL_REGISTER": {
			return {...state, email: action.payload}
			break;
		}
		case "SET_TIMEZONE": {
			return {...state, timezone: action.payload}
		}
	}
	return state;
};

export default registerReducer
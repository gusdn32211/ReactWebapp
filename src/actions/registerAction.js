import axios from 'axios'

export function setUserNameRegister(name) {
	return {
		type: 'SET_USER_NAME_REGISTER',
		payload: name
	}
}

export function setUserEmailRegister(email) {
	return {
		type: 'SET_USER_EMAIL_REGISTER',
		payload: email
	}
}

export function setUserPasswordRegister(password) {
	return {
		type: 'SET_USER_PASSWORD_REGISTER',
		payload: password
	}
}

export function setTimezone(timezone) {
	return {
		type: 'SET_TIMEZONE',
		payload: timezone
	}
}

export function userSignupRequest(userData) {
	return dispatch => {
		return axios.post('/api/users', userData);
	}
}

export function setUserErrorsRegister(errors) {
	return {
		type: 'SET_USER_ERRORS_REGISTER',
		payload: errors
	}
}

export function clearRegisterErrors() {
	return {
		type: 'CLEAR_REGISTER_ERRORS'
	}
}
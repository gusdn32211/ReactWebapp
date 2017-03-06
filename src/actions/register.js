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
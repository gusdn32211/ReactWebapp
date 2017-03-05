export function setUserName(name) {
	return {
		type: 'SET_USER_NAME',
		payload: name
	}
}

export function setUserPassword(password) {
	return {
		type: 'SET_USER_PASSWORD',
		payload: password
	}
}

export function setUserAge(age) {
	return {
		type: 'SET_USER_AGE' ,
		payload: age
	}
}

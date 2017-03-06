import express from 'express';
import validator from 'validator';
import _ from 'lodash';

let router = express.Router();

function validateInput(data) {
	let errors = {};

	if (_.isEmpty(data.username)) {
		errors.username = 'This field is required';
	}

	if (_.isEmpty(data.email)) {
		errors.email = 'This field is required';
	}

	if (!validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}

	if (_.isEmpty(data.password)) {
		errors.password = 'This field is required';
	}

	// if (Validator.isEmpty(data.email)) {
	// 	errors.passwordConfirmation = 'This field is required';
	// }

	// if (!Validator.equals(data.password, data.passwordConfirmation)) {
	// 	errors.passwordConfirmation = 'Password must match';
	// }

	if (_.isEmpty(data.timezone)) {
		errors.timezone = 'This field is required';
	}

	return {
		errors,
		isValid: _.isEmpty(errors)
	}
}

router.post('/', (req, res) => {
	const { errors, isValid } = validateInput(req.body);

	if (!isValid) {
		res.status(400).json(errors);
	}
});

export default router;


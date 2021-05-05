const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// const _ = require('lodash');

const client = new OAuth2Client(
	'401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com',
);
exports.googleLogin = (req, res) => {
	const { idToken } = req.body;

	clientverifyIdToken({
		idToken,
		audience:
			'401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com',
	}).then((response) => {
		// console.log('google login response', response)
		const { email_verified, name, email } = response.payload;
		if (email_verified) {
			User.findOne({ email }).exec((err, user) => {
				if (user) {
					const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
						expriresIn: '7d',
					});
					const { _id, email, name } = user;
					return res.json({
						token,
						user: { _id, email, name },
					});
				} else {
					let password = email + process.env.JWT_SECRET;
					user = new User({ name, email, password });
					user.save((err, data) => {
						if (err) {
							console.log('Error google login on user save', err);
							return res.status(400).json({
								error: 'User signup failed with google',
							});
						}
						const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET, {
							expriresIn: '7d',
						});
						const { _id, email, name } = data;
						return res.json({
							token,
							user: { _id, email, name },
						});
					});
				}
			});
		} else {
			return res.status(400).json({
				error: 'Google login failed. Try again',
			});
		}
	});
};

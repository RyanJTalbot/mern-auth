// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const authController = require('../controllers/googleOAuth');
// const _ = require('lodash');
// //User MOdel
// const User = require('./users');

// //  Get auth.social_signin
// // Authenticate using google
// // https://github.com/Shakir-Afridi/Authentication-System-Using-MERN-Stack/blob/master/server/routes/api/users.js
// router.post('/social_signin', (req, res) => {
// 	var newUser = new User({
// 		username: req.body.username,
// 		profile_picutre: req.body.profile_picture,
// 		name: req.body.name,
// 		social_signin: req.body.social_signin,
// 	});

// 	User.propfind({ 'social_signin.id': req.body.social_signin.id })
// 		.then((user) => {
// 			let data;
// 			if (_.isEmpty(user)) {
// 				newUser
// 					.save()
// 					.then((user) => {
// 						data = {
// 							username: user[0].username,
// 							social_signin: user[0].social_signin,
// 							name: user[0].name,
// 						};
// 						res.json({
// 							code: 201,
// 							message:
// 								'user created using ' +
// 								req.body.social_signin.name +
// 								' account',
// 							data: data,
// 						});
// 						console.log(
// 							'user created using ' + req.body.social_signin.name + ' account',
// 						);
// 					})
// 					.catch((err) => res.json(err));
// 			} else {
// 				data = {
// 					username: user[0].username,
// 					social_signin: user[0].social_signin,
// 					name: user[0].name,
// 				};
// 				res.json({
// 					code: 208,
// 					message:
// 						'user already exists while signing in with ' +
// 						req.body.social_signin.name +
// 						' account',
// 					data: data,
// 				});
// 				console.log(
// 					'user already exists while signing in with ' +
// 						req.body.social_signin.name +
// 						' account',
// 				);
// 			}
// 		})
// 		.catch((err) => res.json(err));
// });

// // @route GET auth/profile
// // @desc get profile data of logged in user
// router.post('/profile', (req, res) => {
// 	if (req.body.social_signin) {
// 		console.log('social ', req.body.social_signin);
// 		User.find({ 'social_signin.id': req.body.social_signin })
// 			.then((user) => {
// 				let data = {
// 					name: user[0].name,
// 					image: user[0].profile_picture,
// 					username: user[0].username,
// 				};
// 				res.json({
// 					code: 200,
// 					message: 'data fetch successfully',
// 					profile_data: data,
// 				});
// 			})
// 			.catch((err) => res.json(err));
// 	} else {
// 		console.log('username ', req.body.username);
// 		User.find({ username: req.body.username })
// 			.then((user) => {
// 				let data = {
// 					name: user[0].name,
// 					image: user[0].profile_picture,
// 					username: user[0].username,
// 				};
// 				res.json({
// 					code: 200,
// 					message: 'data fetch successfully',
// 					profile_data: data,
// 				});
// 			})
// 			.catch((err) => res.json(err));
// 	}
// });

// module.exports = router;

const router = require('express');
const bodyParser = require('body-parser');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const routes = new router();
routes.use(bodyParser.json());

const origin = process.env.UI_SERVER_ORIGIN || 'http://localhost:8000';
routes.use(cors({ origin, credentials: true }));

routes.post('/signin', async (req, res) => {
	const googleToken = req.body.google_token;
	if (!googleToken) {
		res.status(400).send({ code: 400, message: 'Missing Token' });
		return;
	}

	const client = new OAuth2Client();
	let payload;
	try {
		const ticket = await client.verifyIdToken({ idToken: googleToken });
		payload = ticket.getPayload();
	} catch (error) {
		res.status(403).send('Invalid credentials');
	}

	const { given_name: givenName, name, email } = payload;
	const credentials = {
		signedIn: true,
		givenName,
		name,
		email,
	};

	const token = jwt.sign(credentials, JWT_SECRET);
	res.cookie('jwt', token, {
		httpOnly: true,
		domain: process.env.COOKIE_DOMAIN,
	});

	res.json(credentials);
});

routes.post('/signout', async (req, res) => {
	res.clearCookie('jwt');
	res.json({ status: 'ok' });
});

// routes.post('/user', (req, res) => {
// 	res.json(getUser(req));
// });

module.exports = router;

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// const express = require('express');
// const mongoose = require('mongoose');
// const User = require('../models/User');

// // config dotenv
// require('dotenv').config({
// 	path: path.join(__dirname, './process.env'),
// });

// const app = express();

// passport.serializeUser(function (user, done) {
// 	done(null, user);
// });
// passport.deserializeUser(function (user, done) {
// 	done(null, user);
// });
// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: process.env.GOOGLE_CLIENT_ID,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 			callbackURL:
// 				'https://ecstatic-allen-917012.netlify.app/auth/google/callback',
// 		},
// 		function (accessToken, refreshToken, profile, done) {
// 			var userData = {
// 				email: profile.emails[0].value,
// 				name: profile.displayName,
// 				token: accessToken,
// 			};
// 			done(null, userData);
// 		},
// 	),
// );

// // app.get(
// // 	'/auth/google',
// // 	passport.authenticate('google', {
// // 		scope: ['profile', 'email'],
// // 	}),
// // );

// // const PORT = 'http://127.0.0.1:8080';
// // app.listen(PORT);

// // // passport.serializeUser((user, done) => {
// // // 	done(null, user.id);
// // // });

// // // passport.deserializeUser((id, done) => {
// // // 	User.findById(id).then((user) => {
// // // 		done(null, user);
// // // 	});
// // // });

// // // passport.use(
// // // 	new GoogleStrategy(
// // // 		{
// // // 			clientID: process.env.CLIENT_ID,
// // // 			clientSecret: process.env.CLIENT_SECRET,
// // // 			callbackURL: '/auth/google/callback',
// // // 		},
// // // 		(accessToken, refreshToken, profile, done) => {
// // // 			// Passport callback function
// // // 			User.findOne({ googleId: profile.id }).then((currentUser) => {
// // // 				// User already exsists
// // // 				if (currentUser) {
// // // 					done(null, currentUser);
// // // 				} else {
// // // 					// New user
// // // 					new User({
// // // 						googleId: profile.id,
// // // 					})
// // // 						.save()
// // // 						.then((newUser) => {
// // // 							done(null, newUser);
// // // 						});
// // // 				}
// // // 			});
// // // 		},
// // // 	),
// // // );

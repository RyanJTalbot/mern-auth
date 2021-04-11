const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');

// config dotenv
require('dotenv').config({
	path: path.join(__dirname, './process.env'),
});

const app = express();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: '/auth/google/callback',
		},
		(accessToken) => {
			console.log(accessToken);
		},
	),
);

app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	}),
);

const PORT = process.env.PORT || 8000;
app.listen(PORT);

// passport.serializeUser((user, done) => {
// 	done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
// 	User.findById(id).then((user) => {
// 		done(null, user);
// 	});
// });

// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: process.env.CLIENT_ID,
// 			clientSecret: process.env.CLIENT_SECRET,
// 			callbackURL: '/auth/google/callback',
// 		},
// 		(accessToken, refreshToken, profile, done) => {
// 			// Passport callback function
// 			User.findOne({ googleId: profile.id }).then((currentUser) => {
// 				// User already exsists
// 				if (currentUser) {
// 					done(null, currentUser);
// 				} else {
// 					// New user
// 					new User({
// 						googleId: profile.id,
// 					})
// 						.save()
// 						.then((newUser) => {
// 							done(null, newUser);
// 						});
// 				}
// 			});
// 		},
// 	),
// );

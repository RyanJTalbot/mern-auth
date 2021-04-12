var express = require('express');
var passport = require('passport');
require('dotenv').config();

var GitHubStrategy = require('passport-github').Strategy;

passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENTID,
			clientSecret: process.env.GITHUB_CLIENTSECRET,
			callbackURL: 'http://localhost:3000/auth/github/callback',
		},
		function (accessToken, refreshToken, profile, cb) {
			User.findOrCreate({ githubId: profile.id }, function (err, user) {
				return cb(err, user);
			});
		},
	),
);

module.exports = passport;

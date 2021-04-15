// const express = require('express');
// const router = express.Router();
// var passportGithub = require('../services/githubPassport');
// const User = require('../models/githubUser');

// /* GITHUB ROUTER */
// router.get(
// 	'/github',
// 	passportGitHub.authenticate('github', { scope: ['user:email'] }),
// );

// router.get(
// 	'/github/callback',
// 	passportGitHub.authenticate('github', { failureRedirect: '/login' }),
// 	function (req, res) {
// 		// Successful authentication, redirect home.
// 		res.redirect('/dashboard');
// 	},
// );

// module.exports = router;

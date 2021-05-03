var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID:
				'1008450596688-sbe1q92ltb7qnn865dbisn9m8q989ldt.apps.googleusercontent.com',
			clientSecret:
				'Ae5p%k%U9K?d|fXh8)K+Olz]|AIzHGpQ5vBTK-6C}siq+Tna8@<u!8c0mgC+I',
			callbackURL: 'http://localhost:3000/auth/google/callback',
		},
		function (accessToken, refreshToken, profile, done) {
			var userData = {
				email: profile.emails[0].value,
				name: profile.displayName,
				token: accessToken,
			};
			done(null, userData);
		},
	),
);

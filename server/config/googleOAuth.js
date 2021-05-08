// const { OAuth2Client } = require('google-auth-library');

// const client = new OAuth2Client(
// 	'401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com',
// 	process.env.GOOGLE_CLIENT_SECRET,
// 	/**
// 	 * To get access_token and refresh_token in server side,
// 	 * the data for redirect_uri should be postmessage.
// 	 * postmessage is magic value for redirect_uri to get credentials without actual redirect uri.
// 	 */
// 	'postmessage',
// );

// exports.getProfileInfo = async (code) => {
// 	const r = await client.getToken(code);
// 	const idToken = r.tokens.id_token;

// 	const ticket = await client.verifyIdToken({
// 		idToken,
// 		audience:
// 			'401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com',
// 	});

// 	const payload = ticket.getPayload();

// 	return payload;
// };

const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(
	'401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com',
);

const googleAuth = async (token) => {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience:
			'401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com',
	});
	const payload = ticket.getPayload();

	console.log(`User ${payload.name} verified`);

	const { sub, email, name, picture } = payload;
	const userId = sub;
	return { userId, email, fullName: name, photoUrl: picture };
};

module.exports = googleAuth;

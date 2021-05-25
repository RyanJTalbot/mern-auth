// Token confirmation
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(
	'154114895444-bu5ar17gabc7cjdoquo4k5k2b274mpsu.apps.googleusercontent.com',
);

const googleAuth = async (token) => {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience:
			'154114895444-bu5ar17gabc7cjdoquo4k5k2b274mpsu.apps.googleusercontent.com',
	});

	const payload = ticket.getPayload();
	console.log('payload:', payload);
	console.log(`User ${payload.name} verified`);

	const { sub, email, name, picture } = payload;
	const userId = sub;
	return { userId, email, fullName: name, photoUrl: pciture };
};

module.exports = googleAuth;

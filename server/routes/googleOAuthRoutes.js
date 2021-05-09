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

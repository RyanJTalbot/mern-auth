const { OAuth2Client } = require('google-auth-library');
const router = express.Router();

const client = new OAuth2Client(
	'401853306024-ck88rrd3tmbk6segfj0e1tr4ukv3dt0p.apps.googleusercontent.com',
);

async function verify() {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience:
			'401853306024-ck88rrd3tmbk6segfj0e1tr4ukv3dt0p.apps.googleusercontent.com',
		// Specify the CLIENT_ID of the app that accesses the backend
	});
	const payload = ticket.getPayload();
	const userid = payload['sub'];
	// If request specified a G Suite domain:
	// const domain = payload['hd'];
}

verify().catch(console.error);

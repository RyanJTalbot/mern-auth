const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');

const secretkey = process.env.JWT_SECRET;
const GoogleLogin = require('./models/googleUserModel');

// const googleAuth = require('./config/googleAuth');
const githubAuth = require('./routes/githubAuth');
const users = require('./routes/users');
const cardsRouter = require('./routes/cards');
const reduxRouter = require('./routes/reduxs');
const npmRouter = require('./routes/npmCards');
const expressRouter = require('./routes/expressCards');
const javascriptRouter = require('./routes/javascriptCards');
const reactRouter = require('./routes/reactCards');
const mongoRouter = require('./routes/mongoCards');
const nodeRouter = require('./routes/nodeCards');

// google controller
const googleOAuth = require('./config/googleOAuth');

// googleauth routes
const google = require('./routes/googleOAuthRoutes');

const googleRoutes = require('./routes/googleRoutes');

require('./models/googleUserModel');
require('./services/passport');

require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();

// Enable Helmet
app.use(helmet());

// Logger from Morgan
app.use(logger('combined'));

// Bodyparser middleware
app.use(
	express.urlencoded({
		extended: false,
	}),
);
app.use(express.json());

// Cors
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;
const { OAuth2Client } = require('google-auth-library');

// 'mongodb+srv://Admin:qwerty12345@cards.jug3a.mongodb.net/flashcards?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
	.connect(db, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then(() => console.log('MongoDB successfully connected'))
	.catch((err) => console.log(err));

// Cookie Session
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	}),
);

// Google Auth
// app.post('/login/user', async (req, res) => {
// 	const client = new OAuth2Client(process.env.CLIENT_ID);
// 	const { authId } = req.body;

// 	try {
// 		// check if passed token is valid
// 		const ticket = await client.verifyIdToken({
// 			idToken: authId,
// 			audience: process.env.CLIENT_ID,
// 		});

// 		//get metadata from the id token, to be saved in the db
// 		const { name, email, picture } = ticket.getPayload();

// 		//this value will be passed thru cookie
// 		const loginToken = jwt.sign(`${email}`, secretkey);

//upsert is true, this option enables mongoose to create a new entry if there is no existing record matching the filter
// await GoogleLogin.findOneAndUpdate(
// 	{
// 		email,
// 	},
// 	{
// 		name,
// 		picture,
// 	},
// 	{
// 		upsert: true,
// 	},
// );

//creating a cookie name "login", which will expire after 360000 milliseconds from the time of creation
//the value of the cookie is a jwt, created using the email id of the google user
//later on each call we will deconde this message using secret key and check if user is authenticated

// 		res
// 			.status(200)
// 			.cookie('login', loginToken, { expire: 360000 + Date.now() })
// 			.send({
// 				success: true,
// 			});
// 	} catch (e) {
// 		res.status(500).send({
// 			error: e,
// 		});
// 	}
// });

// Google authenticate user - check if user is valid/logged in
// app.get('/user/authenticated/getAll', googleOAuth, async (req, res) => {
// 	try {
// 		const data = await GoogleLogin.find({});
// 		res.status(200).send({
// 			users: data,
// 		});
// 	} catch (e) {
// 		res.status(500).send({
// 			error: e,
// 		});
// 	}
// });

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport config
require('./config/passport')(passport);
require('./config/googleOAuth');
const passportConfig = require('./config/googleOAuth');

// Routes
app.use('/users', users);

// Google OAuth
app.use('/auth/google', google);
// app.use('/auth/google', googleRoutes);

// Connect to cards
app.use('/cards', cardsRouter);

// Connect to redux
app.use('/reduxs', reduxRouter);

// Connect to npm
app.use('/npms', npmRouter);

// Connect to express
app.use('/expresses', expressRouter);

// Connect to Javascript
app.use('/javascripts', javascriptRouter);

// Connect to React
app.use('/reacts', reactRouter);

// Connect to Mongo
app.use('/mongos', mongoRouter);

// Connect to Mongo
app.use('/nodes', nodeRouter);

require('./routes/authRoutes')(app);

// Google
app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
		accessType: 'offline',
		prompt: 'consent',
	}),
);
app.get(
	'/auth/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	(req, res) => {
		res.redirect(req.session.returnTo || '/');
	},
);

// for production

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// if (PORT == null || PORT == '') {
// 	PORT = 8000;
// }

// app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
// 	// Set static folder
// 	app.use(express.static('client/build'));

// 	app.get('*', (req, res) =>
// 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
// 	);
// }

// ex. template express.static(root, [options])
// app.get('/*', function (req, res) {
// 	res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

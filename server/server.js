const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');

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
const googleRouter = require('./routes/index');
// const googleOAuthRoutes = require('./routes/googleOAuthRoutes');

// Googleauth from Config
const googleAuth = require('./config/googleOAuth');
// googleauth routes
const google = require('./routes/googleOAuthRoutes');

require('./models/googleUserModel');
require('./services/passport');

require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();

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

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport config
require('./config/passport')(passport);
require('./config/passportGoogle');

// Google Auth
// app.use('/auth', googleOAuthRoutes);

// Routes
app.use('/users', users);

// Google Auth
app.use('/auths', users);
// app.use('/users', googleRoutes);

// Google OAuth
// app.use('/auth/google', googleRouter);
// app.use('/auth/google/callback', googleRouter);
app.use('/auth/google', google);

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

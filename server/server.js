const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const logger = require('morgan');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const helmet = require('helmet');

const users = require('./routes/users');
const cardsRouter = require('./routes/cards');
const reduxRouter = require('./routes/reduxs');
const npmRouter = require('./routes/npmCards');
const expressRouter = require('./routes/expressCards');
const javascriptRouter = require('./routes/javascriptCards');
const reactRouter = require('./routes/reactCards');
const mongoRouter = require('./routes/mongoCards');
const nodeRouter = require('./routes/nodeCards');

const AuthProvider = require('./config/googleAuthProvider');

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

// Google
app.use('/useAuth', useAuth);

// Routes
app.use('/users', users);

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

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

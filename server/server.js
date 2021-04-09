const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const users = require('./routes/users');
const cardsRouter = require('./routes/cards');
const reduxRouter = require('./routes/reduxs');
const npmRouter = require('./routes/npmCards');
const expressRouter = require('./routes/expressCards');
const javascriptRouter = require('./routes/javascriptCards');
const reactRouter = require('./routes/reactCards');
const mongoRouter = require('./routes/mongoCards');
const nodeRouter = require('./routes/nodeCards');

const PORT = process.env.PORT || 8000;

const app = express();

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
const db = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
	.connect(
		'mongodb+srv://Admin:qwerty12345@cards.jug3a.mongodb.net/flashcards?retryWrites=true&w=majority',
		{
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		},
	)
	.then(() => console.log('MongoDB successfully connected'))
	.catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

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

// for production

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')),
	);
}

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));

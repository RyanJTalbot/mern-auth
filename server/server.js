const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const cors = require('cors');

const users = require('./routes/users');
const cardsRouter = require('./routes/cards');
const reduxRouter = require('./routes/reduxs');
const mongRouter = require('./routes/moexnode');
const npmRouter = require('./routes/npmCards');
const expressRouter = require('./routes/expressCards');
const javascriptRouter = require('./routes/javascriptCards');

const port = process.env.PORT || 8000;

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

// Connect to mongo
app.use('/mongs', mongRouter);

// Connect to npm
app.use('/npms', npmRouter);

// Connect to express
app.use('/expresses', expressRouter);

// Connect to Javascript
app.use('/javascripts', javascriptRouter);

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static(path.join(__dirname, '/frontend/build')));

// 	app.get('*', (req, res) =>
// 		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')),
// 	);
// }

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

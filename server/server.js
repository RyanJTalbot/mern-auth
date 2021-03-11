const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const cors = require('cors');

const users = require('./routes/users');
const app = express();

// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false,
	}),
);
app.use(bodyParser.json());

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
const port = process.env.PORT || 8000;

// Connect to cards
const cardsRouter = require('./routes/cards');
app.use('/cards', cardsRouter);

// Connect to redux
// const reduxsRouter = require('./routes/reduxs');
// app.use('/reduxs', reduxsRouter);

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static(path.join(__dirname, '/frontend/build')));

// 	app.get('*', (req, res) =>
// 		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')),
// 	);
// }

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

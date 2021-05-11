const mongoose = require('mongoose');

const { Schema } = mongoose;

const userrSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	picture: {
		type: String,
	},
});

mongoose.model('userrs', userrSchema);

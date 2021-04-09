const mongoose = require('mongoose');

// Create Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		trim: true,
		required: true,
		index: true,
		unipue: true,
		sparse: true,
	},
	// photo: {
	// 	data: Buffer,
	// 	contentType: string,
	// },

	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = User = mongoose.model('users', UserSchema);

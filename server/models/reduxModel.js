const mongoose = require('mongoose');

const reduxSchema = new mongoose.Schema({
	question: { type: String },
	choiceA: { type: String },
	choiceB: { type: String },
	choiceC: { type: String },
	choiceD: { type: String },
	answer: { type: String },
});

const Redux = mongoose.model('Redux', reduxSchema);

module.exports = Redux;

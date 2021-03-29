const mongoose = require('mongoose');

const npmSchema = new mongoose.Schema({
	question: { type: String },
	choiceA: { type: String },
	choiceB: { type: String },
	choiceC: { type: String },
	choiceD: { type: String },
	answer: { type: String },
});

const NPM = mongoose.model('NPM', npmSchema);

module.exports = NPM;

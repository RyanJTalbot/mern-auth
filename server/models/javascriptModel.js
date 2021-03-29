const mongoose = require('mongoose');

const javascriptSchema = new mongoose.Schema({
	question: { type: String },
	choiceA: { type: String },
	choiceB: { type: String },
	choiceC: { type: String },
	choiceD: { type: String },
	answer: { type: String },
});

const JavaScript = mongoose.model('JavaScript', javascriptSchema);

module.exports = JavaScript;

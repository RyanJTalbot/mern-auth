const mongoose = require('mongoose');

const expressSchema = new mongoose.Schema({
	question: { type: String },
	choiceA: { type: String },
	choiceB: { type: String },
	choiceC: { type: String },
	choiceD: { type: String },
	answer: { type: String },
});

const Express = mongoose.model('Express', expressSchema);

module.exports = Express;

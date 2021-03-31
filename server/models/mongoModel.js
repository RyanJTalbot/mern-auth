const mongoose = require('mongoose');

const mongoSchema = new mongoose.Schema({
	question: { type: String },
	choiceA: { type: String },
	choiceB: { type: String },
	choiceC: { type: String },
	choiceD: { type: String },
	answer: { type: String },
});

const Mong = mongoose.model('Mong', mongoSchema);

module.exports = Mong;

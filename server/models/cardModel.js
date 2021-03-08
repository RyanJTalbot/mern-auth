const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
	question: { type: String },
	choiceA: { type: String },
	choiceB: { type: String },
	choiceC: { type: String },
	choiceD: { type: String },
	answer: { type: String },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;

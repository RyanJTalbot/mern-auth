const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
	question: { type: String },
	choiceA: { type: String },
	choiceB: { type: String },
	choiceC: { type: String },
	choiceD: { type: String },
	answer: { type: String },
});

const Node = mongoose.model('Node', nodeSchema);

module.exports = Node;

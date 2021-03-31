const router = require('express').Router();
let Node = require('../models/nodeModel');

router.route('/').get((req, res) => {
	//to get one data set at a time I used Card.find().limit(1)

	// Below code is used to get just one data set
	Node.aggregate([{ $sample: { size: 1 } }])
		// Card.find()
		.then((nodes) => res.json(nodes))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Node.findById(req.params.id)
		.then((node) => res.json(node))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const question = req.body.question;
	const choiceA = req.body.choiceA;
	const choiceB = req.body.choiceB;
	const choiceC = req.body.choiceC;
	const choiceD = req.body.choiceD;
	const answer = req.body.answer;

	const newNode = new Node({
		question,
		choiceA,
		choiceB,
		choiceC,
		choiceD,
		answer,
	});

	newNode
		.save()
		.then(() => res.json('Card added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Node.findByIdAndDelete(req.params.id).then(() =>
		res.json('Node card deleted.'),
	);
});

router.route('/update/:id').post((req, res) => {
	Node.findById(req.params.id)
		.then((node) => {
			node.question = req.body.question;
			node.choiceA = req.body.choiceA;
			node.choiceB = req.body.choiceB;
			node.choiceC = req.body.choiceC;
			node.choiceD = req.body.choiceD;

			node.answer = req.body.answer;

			node
				.save()
				.then(() => res.json('Card Updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

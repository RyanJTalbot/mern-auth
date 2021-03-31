const router = require('express').Router();
let React = require('../models/reactModel');

router.route('/').get((req, res) => {
	//to get one data set at a time I used Card.find().limit(1)

	// Below code is used to get just one data set
	React.aggregate([{ $sample: { size: 1 } }])
		// Card.find()
		.then((reacts) => res.json(reacts))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	React.findById(req.params.id)
		.then((react) => res.json(react))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const question = req.body.question;
	const choiceA = req.body.choiceA;
	const choiceB = req.body.choiceB;
	const choiceC = req.body.choiceC;
	const choiceD = req.body.choiceD;
	const answer = req.body.answer;

	const newReact = new React({
		question,
		choiceA,
		choiceB,
		choiceC,
		choiceD,
		answer,
	});

	newReact
		.save()
		.then(() => res.json('Card added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	React.findByIdAndDelete(req.params.id).then(() =>
		res.json('React card deleted.'),
	);
});

router.route('/update/:id').post((req, res) => {
	React.findById(req.params.id)
		.then((react) => {
			react.question = req.body.question;
			react.choiceA = req.body.choiceA;
			react.choiceB = req.body.choiceB;
			react.choiceC = req.body.choiceC;
			react.choiceD = req.body.choiceD;

			react.answer = req.body.answer;

			react
				.save()
				.then(() => res.json('Card Updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

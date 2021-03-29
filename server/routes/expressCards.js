const router = require('express').Router();
let Express = require('../models/expressModel');

router.route('/').get((req, res) => {
	//to get one data set at a time I used Card.find().limit(1)

	// Below code is used to get just one data set
	Express.aggregate([{ $sample: { size: 1 } }])
		// Card.find()
		.then((expresses) => res.json(expresses))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Express.findById(req.params.id)
		.then((express) => res.json(express))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const question = req.body.question;
	const choiceA = req.body.choiceA;
	const choiceB = req.body.choiceB;
	const choiceC = req.body.choiceC;
	const choiceD = req.body.choiceD;
	const answer = req.body.answer;

	const newExpress = new Express({
		question,
		choiceA,
		choiceB,
		choiceC,
		choiceD,
		answer,
	});

	newExpress
		.save()
		.then(() => res.json('Card added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Express.findByIdAndDelete(req.params.id).then(() =>
		res.json('Express deleted.'),
	);
});

router.route('/update/:id').post((req, res) => {
	Express.findById(req.params.id)
		.then((express) => {
			express.question = req.body.question;
			express.choiceA = req.body.choiceA;
			express.choiceB = req.body.choiceB;
			express.choiceC = req.body.choiceC;
			express.choiceD = req.body.choiceD;

			express.answer = req.body.answer;

			express
				.save()
				.then(() => res.json('Card Updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

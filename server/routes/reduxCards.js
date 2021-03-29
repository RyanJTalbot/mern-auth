var express = require('express');
var router = express.Router();
let Redux = require('../models/reduxModel');

router.get('/', (req, res) => {
	// Below code is used to get just one data set
	Redux.aggregate([{ $sample: { size: 1 } }])
		// Redux.find()
		.then((reduxs) => res.json(reduxs))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Redux.findById(req.params.id)
		.then((redux) => res.json(redux))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const question = req.body.question;
	const choiceA = req.body.choiceA;
	const choiceB = req.body.choiceB;
	const choiceC = req.body.choiceC;
	const choiceD = req.body.choiceD;
	const answer = req.body.answer;

	const newRedux = new Redux({
		question,
		choiceA,
		choiceB,
		choiceC,
		choiceD,
		answer,
	});

	newRedux
		.save()
		.then(() => res.json('Redux added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Redux.findByIdAndDelete(req.params.id).then(() => res.json('Redux deleted.'));
});

router.route('/update/:id').post((req, res) => {
	Redux.findById(req.params.id)
		.then((redux) => {
			redux.question = req.body.question;
			redux.choiceA = req.body.choiceA;
			redux.choiceB = req.body.choiceB;
			redux.choiceC = req.body.choiceC;
			redux.choiceD = req.body.choiceD;

			redux.answer = req.body.answer;

			redux
				.save()
				.then(() => res.json('Redux Updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

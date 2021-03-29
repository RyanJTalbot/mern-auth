const router = require('express').Router();
let NPM = require('../models/npmModel');

router.route('/').get((req, res) => {
	//to get one data set at a time I used Card.find().limit(1)

	// Below code is used to get just one data set
	NPM.aggregate([{ $sample: { size: 1 } }])
		// Card.find()
		.then((npms) => res.json(npms))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	NPM.findById(req.params.id)
		.then((npm) => res.json(npm))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const question = req.body.question;
	const choiceA = req.body.choiceA;
	const choiceB = req.body.choiceB;
	const choiceC = req.body.choiceC;
	const choiceD = req.body.choiceD;
	const answer = req.body.answer;

	const newNPM = new NPM({
		question,
		choiceA,
		choiceB,
		choiceC,
		choiceD,
		answer,
	});

	newNPM
		.save()
		.then(() => res.json('Card added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	NPM.findByIdAndDelete(req.params.id).then(() => res.json('NPM deleted.'));
});

router.route('/update/:id').post((req, res) => {
	NPM.findById(req.params.id)
		.then((npm) => {
			npm.question = req.body.question;
			npm.choiceA = req.body.choiceA;
			npm.choiceB = req.body.choiceB;
			npm.choiceC = req.body.choiceC;
			npm.choiceD = req.body.choiceD;

			npm.answer = req.body.answer;

			npm
				.save()
				.then(() => res.json('Card Updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

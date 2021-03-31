const router = require('express').Router();
let Mongo = require('../models/mongoModel');

router.route('/').get((req, res) => {
	//to get one data set at a time I used Card.find().limit(1)

	// Below code is used to get just one data set
	Mongo.aggregate([{ $sample: { size: 1 } }])
		// Card.find()
		.then((mongos) => res.json(mongos))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Mongo.findById(req.params.id)
		.then((mongo) => res.json(mongo))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const question = req.body.question;
	const choiceA = req.body.choiceA;
	const choiceB = req.body.choiceB;
	const choiceC = req.body.choiceC;
	const choiceD = req.body.choiceD;
	const answer = req.body.answer;

	const newMongo = new Mongo({
		question,
		choiceA,
		choiceB,
		choiceC,
		choiceD,
		answer,
	});

	newMongo
		.save()
		.then(() => res.json('Card added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Mongo.findByIdAndDelete(req.params.id).then(() =>
		res.json('Mongo card deleted.'),
	);
});

router.route('/update/:id').post((req, res) => {
	Mongo.findById(req.params.id)
		.then((mongo) => {
			mongo.question = req.body.question;
			mongo.choiceA = req.body.choiceA;
			mongo.choiceB = req.body.choiceB;
			mongo.choiceC = req.body.choiceC;
			mongo.choiceD = req.body.choiceD;

			mongo.answer = req.body.answer;

			mongo
				.save()
				.then(() => res.json('Card Updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

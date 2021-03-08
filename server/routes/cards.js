const router = require('express').Router();
let Card = require('../models/cardModel');

router.route('/').get((req, res) => {
	//to get one data set at a time I used Card.find().limit(1)

	// Below code is used to get just one data set
	Card.aggregate([{ $sample: { size: 1 } }])
		// Card.find()
		.then((cards) => res.json(cards))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Card.findById(req.params.id)
		.then((card) => res.json(card))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const question = req.body.question;
	const choiceA = req.body.choiceA;
	const choiceB = req.body.choiceB;
	const choiceC = req.body.choiceC;
	const choiceD = req.body.choiceD;
	const answer = req.body.answer;

	const newCard = new Card({
		question,
		choiceA,
		choiceB,
		choiceC,
		choiceD,
		answer,
	});

	newCard
		.save()
		.then(() => res.json('Card added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Card.findByIdAndDelete(req.params.id).then(() => res.json('Card deleted.'));
});

router.route('/update/:id').post((req, res) => {
	Card.findById(req.params.id)
		.then((card) => {
			card.question = req.body.question;
			card.choiceA = req.body.choiceA;
			card.choiceB = req.body.choiceB;
			card.choiceC = req.body.choiceC;
			card.choiceD = req.body.choiceD;

			card.answer = req.body.answer;

			card
				.save()
				.then(() => res.json('Card Updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

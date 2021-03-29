const router = require('express').Router();
let JavaScript = require('../models/javascriptModel');

router.route('/').get((req, res) => {
	//to get one data set at a time I used Card.find().limit(1)

	// Below code is used to get just one data set
	JavaScript.aggregate([{ $sample: { size: 1 } }])
		// Card.find()
		.then((JavaScripts) => res.json(JavaScripts))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	JavaScript.findById(req.params.id)
		.then((javascript) => res.json(javascript))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const question = req.body.question;
	const choiceA = req.body.choiceA;
	const choiceB = req.body.choiceB;
	const choiceC = req.body.choiceC;
	const choiceD = req.body.choiceD;
	const answer = req.body.answer;

	const newJavaScript = new JavaScript({
		question,
		choiceA,
		choiceB,
		choiceC,
		choiceD,
		answer,
	});

	newJavaScript
		.save()
		.then(() => res.json('Card added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	JavaScript.findByIdAndDelete(req.params.id).then(() =>
		res.json('JavaScript deleted.'),
	);
});

router.route('/update/:id').post((req, res) => {
	JavaScript.findById(req.params.id)
		.then((javascript) => {
			javascript.question = req.body.question;
			javascript.choiceA = req.body.choiceA;
			javascript.choiceB = req.body.choiceB;
			javascript.choiceC = req.body.choiceC;
			javascript.choiceD = req.body.choiceD;

			javascript.answer = req.body.answer;

			javascript
				.save()
				.then(() => res.json('Card Updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

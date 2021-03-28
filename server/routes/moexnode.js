const router = require('express').Router();
let Mong = require('../models/mongModel');

router.route('/').get((req, res) => {
	Mong.aggregate([{ $sample: { size: 1 } }])
		.then((mongs) => res.json(mongs))
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

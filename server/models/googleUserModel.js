const mongoose = require('mongoose');
const { Schema } = mongoose;

const userrSchema = new Schema({
	googleId: String,
});

mongoose.model('userrs', userrSchema);

var mongoose = require('mongoose');

var GitUserSchema = new mongoose.Schema({
	name: String,
	userid: String,
	updated_at: { type: Date, default: Date.now },
});

GitUserSchema.statics.findOrCreate = require('find-or-create');

module.exports = mongoose.model('GithubUser', GitUserSchema);

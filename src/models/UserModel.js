const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		min: 4,
		lowercase: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		lowercase: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
	},
});

module.exports = model("User", userSchema);
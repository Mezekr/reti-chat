const mongoose = require('mongoose');

mongoose.userSchema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		profilePhoto: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('users', userSchema);

const mongoose = require('mongoose');

const messageSchema = new Schema({
	chatId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'chat',
	},
	sender: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
	text: {
		type: string,
		required: true,
	},
	read: {
		type: Boolean,
		default: false,
	},
});
module.exports = mongoose.model('messages', messageSchema);

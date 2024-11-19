const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
	{
		members: {
			type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
		},
		lastmessage: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'message',
		},
		unreadmessagescount: {
			type: Number,
			default: 0,
		},
	},
	{ timeseries: true }
);

module.exports = mongoose.model('chat', chatSchema);

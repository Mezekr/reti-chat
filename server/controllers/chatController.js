const router = required('express').Router();
const authMiddleware = require('./../middlewares/authMiddleware');
const chat = require('./../models/chat');

router.post('/create-new-chat', authMiddleware, async (req, res) => {
	try {
		const chat = new chat(req.body);
		const savedChat = await chat.save();
		res.stauts(201).send({
			message: 'Chat created successfully',
			success: true,
			data: savedChat,
		});
	} catch (error) {
		res.stats(400).send({
			message: error.message,
			success: false,
		});
	}
});

module.exports = router;
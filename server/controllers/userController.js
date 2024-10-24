const router = require('express').Router();
const authMiddleware = require('./../middlewares/authMiddleware');
const User = require('./../models/user');

router.get('/', authMiddleware, async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.body.userId });
		res.send({
			message: 'user details fetched successfully',
			success: true,
			data: user,
		});
	} catch (error) {
		res.send({
			message: error.message,
			status: false,
		});
	}
});

router.get('/get-all-users', authMiddleware, async (req, res) => {
	try {
		const users = await User.find({ _id: { $ne: req.body.userId } });
		res.send({
			message: 'All user details fetched successfully',
			success: true,
			data: users,
		});
	} catch (error) {
		res.send({
			message: error.message,
			status: false,
		});
	}
});

module.exports = router;

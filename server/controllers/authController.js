const router = require('express').Router();
const User = require('./../models/user');
const bcrypt = require('bcryptjs');
// signup route
router.post('/signup', async (req, res) => {
	try {
		//1.check if user exists
		const user = await User.findOne({ email: req.body.email });
		//2.return user exists response and exit
		if (user) {
			return res.send({
				message: 'User already exists',
				success: false,
			});
		}
		//3. If not exit create a new user
		const hassedPassword = await bcrypt.hash(req.body.password, 10);
		req.body.password = hassedPassword;

		const newUser = new User(req.body);
		await newUser.save();

		res.status(201).send({
			message: 'User created successfully',
			success: true,
		});
	} catch (error) {
		res.send({
			message: error.message,
			success: false,
		});
	}
});

module.exports = router;

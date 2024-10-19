const router = require('express').Router();
const User = require('./../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

router.post('/login', async (req, res) => {
	try {
		//1. check if user exists by email
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(404).send({
				message: "User's email  not found",
				success: false,
			});
		}
		//2 if exist check password matches
		const isValid = await bcrypt.compare(req.body.password, user.password);
		if (!isValid) {
			return res.status(404).send({
				message: 'Invalid password',
				success: false,
			});
		}

		//3. if user exists & password matches create JWT token
		const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
			expiresIn: '1d',
		});

		res.status(200).send({
			message: 'User logged in successfully',
			success: true,
			token: token,
		});
	} catch (error) {
		res.send({
			message: error.message,
			success: false,
		});
	}
});
module.exports = router;

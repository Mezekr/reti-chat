const router = require('express').Router();

// Singup route
router.post('/singup', (req, res) => {
	res.send({
		massage: 'User signup successful',
		states: true,
	});
});

module.exports = router;

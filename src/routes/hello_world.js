const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
	res.send('hello Hoi-Cheung Mok');
})	

module.exports = router;
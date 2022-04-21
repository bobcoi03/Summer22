const express = require('express');
const router = express.Router();

exports.api = (req, res) => {
	res.json({ username: 'bob'});
}

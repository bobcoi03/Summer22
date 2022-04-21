const express = require('express');
const router = express.Router();
const path = require('path');

exports.home = (req, res) => {
	console.log(__dirname);
	res.sendFile(path.join(__dirname, '../public/templates', 'home.html'));
}
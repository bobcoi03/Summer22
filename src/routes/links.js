const express = require('express');
const router = express.Router();
const path = require('path');

exports.links = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/templates', 'links.html'));
}
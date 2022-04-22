const express = require('express');
const router = express.Router();
const path = require('path');

exports.home = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/templates', 'welcome.html'));
}

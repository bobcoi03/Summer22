const express = require('express');
const router = express.Router();
const path = require('path');

exports.contact = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/templates', 'contact.html'));
}
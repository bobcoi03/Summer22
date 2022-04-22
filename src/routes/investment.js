const express = require('express');
const router = express.Router();
const path = require('path');

exports.investment = (req,res) => {
	res.sendFile(path.join(__dirname, '../public/templates', 'investment.html'));
}
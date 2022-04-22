const express = require('express');
const router = express.Router();
const path = require('path');

exports.audio_app = (req, res) => {
	res.sendFile(path.join(__dirname, '../public/templates', 'audio-app.html'));
}
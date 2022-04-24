const express = require('express');
const router = express.Router();
const { api } = require('./api.js');
const { home } = require('./home.js');
const { investment } = require('./investment.js');
const { contact, contact_post } = require('./contact.js');
const { audio_app } = require('./audio-app.js');
const { links } = require('./links.js');

// GET Requests

router.get('/api', api);

router.get('/', home);

router.get('/investment', investment);

router.get('/contact', contact);

router.get('/audio-app', audio_app);

router.get('/links', links);

// POST Requests

router.post('/contact', contact_post);

module.exports = router;
const express = require('express');
const router = express.Router();
const { api } = require('./api.js');
const { home } = require('./home.js');
const { investment } = require('./investment.js');
const { contact } = require('./contact.js');

router.get('/api', api);

router.get('/', home);

router.get('/investment', investment);

router.get('/contact', contact);

module.exports = router;
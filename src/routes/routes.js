const express = require('express');
const router = express.Router();
const { api } = require('./api.js');
const { home } = require('./home.js');
 
router.get('/api', api);

router.get('/', home);

module.exports = router;
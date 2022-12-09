const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/test', ctrl.Views.test);

router.get('/', ctrl.Views.root);

module.exports = router;
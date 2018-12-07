const express = require('express');
const router = express.Router();
const pageCtr = require('../controllers/pageCtr');
const appCtr = require('../controllers/appCtr');



router.get('/', pageCtr.home);
router.get('/contact', pageCtr.contact);
router.get('/test', pageCtr.test);

router.post('/applications', 
  appCtr.normalizeData,
  appCtr.store);

module.exports = router;
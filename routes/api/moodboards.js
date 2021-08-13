const express = require('express');
const router = express.Router();
const upload = require("multer")();
const moodboardsCtrl = require('../../controllers/api/moodboards');

router.post('/create', moodboardsCtrl.createMoodboard);
router.get('/', moodboardsCtrl.index);
router.get('/:id', moodboardsCtrl.detail);

module.exports = router;
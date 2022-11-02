const uploadMiddleware = require('../utils/handleStorage');
const express = require('express');
const { createItem, getItems } = require('../controllers/storage');
const router = express.Router();

router.post("/", uploadMiddleware.single("myfile") , createItem);
router.get("/", getItems);
module.exports = router;
const express = require('express');
const { getItems, getItem, createItem} = require('../controllers/catalog');
const router = express.Router();

//la ruta de http://localhost/catalog get post delete put

router.get("/", getItems)
router.post("/", createItem)

module.exports = router
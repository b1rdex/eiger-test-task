const express = require('express');
const {createNewTrade, getAllTrades, getTradeById} = require("../controllers/trades");
const router = express.Router();

router.post('/', createNewTrade);
router.all('/:id', getTradeById)
router.get('/', getAllTrades)

module.exports = router;

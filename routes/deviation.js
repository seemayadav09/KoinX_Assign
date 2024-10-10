const express = require('express');
const CryptoData = require('../models/CryptoData');

const router = express.Router();

router.get('/', async (req, res) => {
  const { coin } = req.query;
  if (!coin) return res.status(400).json({ message: 'Coin query param is required' });

  try {
    const prices = await CryptoData.find({ coin }).sort({ timestamp: -1 }).limit(100).select('price');
    if (prices.length === 0) return res.status(404).json({ message: 'No data found for the requested coin' });
    const priceArray = prices.map(entry => entry.price);
    const mean = priceArray.reduce((acc, price) => acc + price, 0) / priceArray.length;
    const variance = priceArray.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / priceArray.length;
    const standardDeviation = Math.sqrt(variance);
    res.json({ deviation: standardDeviation.toFixed(2) });
  } catch (error) {
    res.status(500).json({ message: 'Error calculating deviation', error });
  }
});

module.exports = router;

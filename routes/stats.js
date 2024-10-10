const express = require('express');
const CryptoData = require('../models/CryptoData');

const router = express.Router();

router.get('/', async (req, res) => {
  const { coin } = req.query;
  if (!coin) return res.status(400).json({ message: 'Coin query param is required' });

  try {
    const latestData = await CryptoData.findOne({ coin }).sort({ timestamp: -1 });
    if (!latestData) return res.status(404).json({ message: 'No data found for the requested coin' });

    res.json({
      price: latestData.price.toFixed(2),
      marketCap: latestData.marketCap.toFixed(2),
      "24hChange": latestData.change24h.toFixed(2)
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving data', error });
  }
});

module.exports = router;

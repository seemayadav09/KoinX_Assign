const mongoose = require('mongoose');

const cryptoDataSchema = new mongoose.Schema({
  coin: String,
  price: Number,
  marketCap: Number,
  change24h: Number,
  timestamp: { type: Date, default: Date.now }
});

const CryptoData = mongoose.model('CryptoData', cryptoDataSchema);
module.exports = CryptoData;

const axios = require('axios');
const CryptoData = require('../models/CryptoData');

const fetchCryptoData = async () => {
  try {
    const coins = ['bitcoin', 'matic-network', 'ethereum'];
    const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        ids: coins.join(',')
      }
    });
    const cryptoEntries = data.map(coin => ({
      coin: coin.id,
      price: coin.current_price,
      marketCap: coin.market_cap,
      change24h: coin.price_change_24h
    }));
    await CryptoData.insertMany(cryptoEntries);
    console.log('Crypto data fetched and saved successfully.');
  } catch (error) {
    console.error('Error fetching crypto data:', error);
  }
};
module.exports = fetchCryptoData;

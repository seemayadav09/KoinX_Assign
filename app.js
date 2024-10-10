require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const fetchCryptoData = require('./services/fetchCryptoData');
const statsRoute = require('./routes/stats');
const deviationRoute = require('./routes/deviation');

const app = express();
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Databse"))
  .catch((err) => console.log(err));

app.use('/stats', statsRoute);
app.use('/deviation', deviationRoute);

cron.schedule('0 */2 * * *', fetchCryptoData);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

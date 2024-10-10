# Crypto Price Tracker

## Overview

Crypto Price Tracker is a Node.js-based application that fetches the current prices, market capitalization, and 24-hour changes of popular cryptocurrencies. It uses the CoinGecko API to retrieve data and stores it in MongoDB. The application provides APIs to retrieve the latest cryptocurrency statistics and calculate the standard deviation of the price for the last 100 records.

## Features

- **Fetch Crypto Data**: Automatically fetches crypto data for Bitcoin, Ethereum, and Matic every 2 hours.
- **API Endpoints**:
  - '/stats?coin=<coin>': Retrieves the latest price, market cap, and 24h change for the specified coin.
  - '/deviation?coin=<coin>': Calculates and returns the standard deviation of the price for the last 100 records of the specified coin.
- **MongoDB Integration**: Saves fetched crypto data to MongoDB for future retrieval and statistical calculations.
- **Cron Jobs**: Uses cron jobs to schedule periodic data fetching.

## API Endpoints

### `/stats`

- **Method**: `GET`
- **Description**: Returns the latest price, market cap, and 24-hour change for a specified cryptocurrency.
- **Query Params**:
  - `coin`: The coin identifier (e.g., `bitcoin`, `ethereum`, `matic-network`).
- **Response Example**:
  ```json
  {
    "price": 45000,
    "marketCap": 850000000000,
    "24hChange": -0.52
  }
  ```

### `/deviation`

- **Method**: `GET`
- **Description**: Returns the standard deviation of the price for the last 100 records of the specified cryptocurrency.
- **Query Params**:
  - `coin`: The coin identifier (e.g., `bitcoin`, `ethereum`, `matic-network`).
- **Response Example**:
  ```json
  {
    "deviation": 4082.48
  }
  ```

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-price-tracker.git
   cd crypto-price-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the MongoDB URL:
   ```bash
   MONGODB_URL=mongodb://localhost:27017/crypto-tracker
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Running the Cron Job

The application will automatically run the data fetching job every 2 hours by default, but for development purposes, it is currently set to run every 10 seconds.

## Usage

Once the server is running, you can test the endpoints using tools like Postman or curl.

Example:

```bash
curl http://localhost:3000/stats?coin=bitcoin
```

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building REST APIs.
- **MongoDB**: NoSQL database to store cryptocurrency data.
- **Axios**: HTTP client for making API requests to CoinGecko.
- **CoinGecko API**: Used to fetch cryptocurrency market data.
- **Cron**: Used for scheduling background jobs.

## Author

Seema Yadav

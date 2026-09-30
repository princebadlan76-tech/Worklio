const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./src/config/db.js');

const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Test Route
app.get('/api', (req, res) => {
  res.json({ message: 'Worklio Backend API is live and working!' });
});

// Server Export for Vercel
module.exports = app;

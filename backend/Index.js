const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const textRoutes = require('./src/routes/textRoutes');
const fileRoutes = require('./src/routes/fileRoutes');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/tools/text', textRoutes);
app.use('/api/tools/file', fileRoutes);

// Test Route
app.get('/api', (req, res) => {
  res.json({ message: 'Worklio Toolkit Backend API is live!' });
});

module.exports = app;

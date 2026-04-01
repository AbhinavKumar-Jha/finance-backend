const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// 1. Config & Initialize
dotenv.config();
const app = express();

// 2. Middleware (MUST come before Routes)
app.use(cors());
app.use(express.json()); // This parses incoming JSON requests

// 3. Import Routes
const recordRoutes = require('./routes/recordRoutes');
const authRoutes = require('./routes/authRoutes');

// 4. Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/records', recordRoutes);

// 5. Basic Root Route
app.get('/', (req, res) => {
  res.send('Finance API is running...');
});

// 6. Database Connection & Server Start
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ Database connection error:', err.message);
  });
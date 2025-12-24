const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db'); // Import the connection function
const authRoutes = require('./src/routes/authRoutes'); // done
dotenv.config();

// Connect to Database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
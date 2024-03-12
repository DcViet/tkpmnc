// app.js
const express = require('express');
const app = express();
const bookingRoutes = require('./routes/bookingRoutes');

// Middleware
app.use(express.json());

// Routes
app.use(bookingRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const { connect } = require('mongoose');
const connectDB = require('./config/db');
require('dotenv').config();
const adminRoutes = require('./routers/adminRoutes');
const sellerRoutes = require('./routers/sellerRoutes');
const bodyParser = require('body-parser');

const app = express();

// Welcome Route
app.get('/', (req, res) => {
    res.send({ message: "Welcome to Ecommerce Backend!" });
})

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/sellers", sellerRoutes);
app.use("/admin", adminRoutes);

// Start Server
const port = process.env.PORT || 5000;

// Connect to Database and Start Server
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await connectDB();
})
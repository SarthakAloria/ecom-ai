const express = require('express');
const { connect } = require('mongoose');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();


app.get('/', (req, res) => {
    res.send({ message: "Welcome to Ecommerce Backend!" });
})

const port = 5000;

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await connectDB();
})
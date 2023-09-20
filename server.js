const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello, Docker Compose with Node.js and MongoDB!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  try {
    res.status(200).send('Hello World88');
  } catch (error) {
    console.error(' Error processing GET  request:', error);
    return res.status(500).send('Internal Server Error');
  }
});

app.post('/', (req, res) => {
  try {
    const { name } = req.body;
    res.status(200).send('Hello ' + name);
  }   catch (error) {
    console.error('Error processing POST request:', error);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = app;
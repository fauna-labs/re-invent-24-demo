const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Original GET endpoint
app.get('/', async (req, res) => {
  const apiUrl = 'https://cf-fauna.shadidhaque2014.workers.dev/';

  try {
    // Record the start time
    const startTime = Date.now();

    // Make the request to the external API
    const response = await axios.get(apiUrl);

    // Calculate the time taken in milliseconds
    const timeTaken = Date.now() - startTime;

    // Send the API response data and time taken
    res.json({
      data: response.data,
      timeTaken: `${timeTaken}ms`
    });
  } catch (error) {
    console.error('Error fetching data from external API:', error);
    res.status(500).json({ message: 'Error fetching data from external API' });
  }
});

// Updated POST endpoint for /write
app.post('/write', async (req, res) => {
  const apiUrl = 'https://cf-fauna.shadidhaque2014.workers.dev/';
  console.log('Request body --->', req.body);
  const dataToSend = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    category: req.body.category,
  };

  try {
    // Make the POST request to the target API
    const response = await axios.post(apiUrl, dataToSend);

    // Send the response from the target API
    res.json({
      message: 'Data written successfully',
      data: response.data,
    });
  } catch (error) {
    console.error('Error writing data to external API:', error);
    res.status(500).json({ message: 'Error writing data to external API' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

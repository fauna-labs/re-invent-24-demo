const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;


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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

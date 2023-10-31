// const express = require('express');
// const app = express();
// const port = 3002;
// const axios = require('axios');
// app.use(express.json());

// // Define a route
// app.get('/', (req, res) => {
//   res.send('Hello, Express2!');
// });



// app.get('/notify', async (req, res) => {
//   try {
//     // Make an HTTP POST request to the first Express application (port 3000)
//     const response = await axios.post('http://expressapp-express-app1-1:3000/notify', { message: 'Hello from............ Express2' });
//     const messageFromApp1 = response.data;
//     res.send(`Notification from Express2: ${messageFromApp1}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error when sending the request.');
//   }
// });
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



const express = require('express');
const app = express();
const port = 3002;
const axios = require('axios');
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express2!');
});

app.get('/notify', async (req, res) => {
  try {
    // Make an HTTP POST request using Dapr's sidecar (port 3500) to invoke another Dapr service
    const daprPort = 3500;
    const appId = 'express-app1'; // Dapr application ID
    // const daprInvokeUrl = `http://expressapp-express-app1-1:${daprPort}/v1.0/invoke/${appId}/method/notify`;
    const daprInvokeUrl = `http://my-stack_express-app1:${daprPort}/v1.0/invoke/${appId}/method/notify`;

    const message = { message: 'Hello from Express2' };

    const response = await axios.post(daprInvokeUrl, message);

    const messageFromApp1 = response.data;
    res.send(`Notification from Express2: ${messageFromApp1}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error when sending the request.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});







const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
app.get('/user', (req, res) => {
  res.send('Hello user, Express!');
});
app.post('/notify', (req, res) => {
  console.log("inside app 1 notify");
  const messageFromApp2 = req.body.message;
  console.log(`Received notification from Express2: ${messageFromApp2}`);
  res.send(`Notification received by Express1: ${messageFromApp2}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

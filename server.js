const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Enable CORS for all requests
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Simple route to handle POST requests for the sign-up
app.post('/signup', (req, res) => {
  const { email } = req.body;

  // Basic email validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  // Simulate saving the email and send a success message
  console.log(`Email received: ${email}`);
  return res.status(200).json({ message: 'Thank you for signing up! We will send you updates.' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

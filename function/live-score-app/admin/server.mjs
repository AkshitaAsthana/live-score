import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Enable CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Parse incoming request bodies
app.use(bodyParser.json());

// Authentication middleware
const authenticateUser = (req, res, next) => {
  const { username, password } = req.body;

  // Check if the provided username and password match the fixed values
  if (username === 'admin' && password === 'admin123') {
    // Authentication successful
    next();
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Authentication failed' });
  }
};

// Endpoint for user authentication
app.post('/api/login', authenticateUser, (req, res) => {
  res.status(200).json({ message: 'Authentication successful' });
});

// Example protected route that requires authentication
app.get('/api/admin', authenticateUser, (req, res) => {
  res.status(200).json({ message: 'Welcome to the admin page' });
});

// Scores data
let scores = [];

// Update scores endpoint
app.post('/api/scores', (req, res) => {
  const { game, score, details } = req.body;

  // Find the score entry for the specified game
  const index = scores.findIndex((entry) => entry.game === game);

  if (index !== -1) {
    // Update the score entry if it exists
    scores[index] = { game, score, details };
  } else {
    // Create a new score entry if it doesn't exist
    scores.push({ game, score, details });
  }

  // Return a response indicating the success of the update
  res.status(200).json({ message: 'Scores updated successfully' });
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Form = require('./models/Form');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/otp', require('./routes/otp'));

app.get('/', (req, res) => {
  res.send('Dashboard');
});


app.get('/resources', (req, res) => {
  res.send('All resources');
});


app.get('/resources/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Resource with ID: ${id}`);
});


app.post('/resources/create', (req, res) => {
  // const { name, description } = req.body;
  // res.send(`Resource created with name: ${name} and description: ${description}`);

  const { name, email, message } = req.body;
  try {
    const newForm = new Form({ name, email, message });
    // await newForm.save();
    
    res.status(201).json({ message: "Form submitted successfully" , data: newForm });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit form" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
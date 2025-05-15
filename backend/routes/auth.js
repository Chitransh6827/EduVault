const express = require('express');
const jwt = require('jsonwebtoken');
const verifyGoogleToken = require('../utils/verifyGoogleToken');

const router = express.Router();

router.post('/google', async (req, res) => {
  const { token } = req.body;

  try {
    const userData = await verifyGoogleToken(token);

    // Generate a JWT token for the user
    const userToken = jwt.sign(
      { email: userData.email, name: userData.name },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login successful', token: userToken });
  } catch (error) {
    res.status(400).json({ message: 'Invalid Google token', error: error.message });
  }
});

module.exports = router;
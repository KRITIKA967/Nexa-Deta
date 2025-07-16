const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, email, password } = req.body;

  if (username && email && password) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.status(400).json({ success: false, message: 'Please fill in all fields' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

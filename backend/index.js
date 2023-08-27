const express = require('express');
const app = express();
const port = 3001; // Different from your Next.js port!

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

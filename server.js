// server.js
// author: lmaly@redhat.com
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const FILE_PATH = 'data.txt';

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/search', (req, res) => {
  const query = req.query.q?.toLowerCase();
  const results = [];
  const stream = fs.createReadStream(FILE_PATH, { encoding: 'utf-8' });

  stream.on('data', chunk => {
    const lines = chunk.split('\n');
    lines.forEach(line => {
      if (line.toLowerCase().includes(query)) {
        results.push(line);
      }
    });
  });

  stream.on('end', () => {
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');

const app = express();

app.get('/index.html', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
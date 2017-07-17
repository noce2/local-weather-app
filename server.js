/* eslint linebreak-style: ["error", "windows"]*/
const express = require('express');
const path = require('path');

const myapp = express();
const port = (process.env.PORT) || 5050;

// Initial Settings
myapp.set('port', port);
myapp.use('/public', express.static(path.join(__dirname, 'public')));

myapp.get('/', (req, res) => {
  res.sendFile('index.html', { root: (path.join(__dirname)) });
});

myapp.listen(port, () => {
  console.log(`Now listening on ${port}`);
});

const express = require('express');
const path = require('path');

const myapp = express();
const port = (process.env.PORT) || 5050;

// Initial Settings
myapp.set('port', port);
myapp.use('/public', express.static(path.join(__dirname, 'public')));

myapp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
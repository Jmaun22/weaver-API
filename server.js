const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./routes');



const app = express();
const PORT = process.env.PORT || 3001;


// middle ware
app.use(express.json());

app.use(express.urlencoded({ extened: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


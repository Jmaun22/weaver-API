
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;


// middle ware
app.use(express.json());
app.use(express.urlencoded({ extened: true}));

app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});


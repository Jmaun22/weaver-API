
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;


// middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
// Add Access Control Allow Origin headers
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });

app.use(
    cors({
        origin: '*',
    })
)

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});


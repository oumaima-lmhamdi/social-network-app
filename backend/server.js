
const express = require('express');
const connectDB = require('./config/db');
const bodyParser= require("body-parser");



const app = express();

// Connect Database
connectDB();
var cors = require('cors')
app.use(cors())



app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello world!'));

const postRoute = require('./routes/postRoute');
app.use('/api/posts', postRoute);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));



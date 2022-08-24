// Load data from data/questions.json, select 10 questions randomly and serve from an endpoint for the api the web-app.
// Each request to the endpoint should get a new random set.
const express = require('express');
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;

const app = express();
//Body-parser Middleware
app.use(express.json());

//cors
app.use(cors());

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// routes
app.use('/', require('./routes/quiz'));
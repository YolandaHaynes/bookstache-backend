const express = require('express');
const path = require('path');

//Use .env file in config folder
require("dotenv").config({ path: ".env" })

//database
const db = require('./config/database');

//Test DB
db.authenticate()
    .then(()=> console.log("Database connected"))
    .catch(err=> console.log("Error : " + err))


const app = express();

app.get('/', (req,res) => res.send('Index'))

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require ('./routes')


//Use .env file in config folder
require("dotenv").config({ path: ".env" })

const User = require('./models/Users')

//database connection
const db = require('./config/database');

//Test DB
db.authenticate()
    .then(()=> console.log("Database connected"))
    .catch(err=> console.log("Error : " + err))

const app = express();

app.use(bodyParser.json())

//Routes
app.use('/api', routes)
// app.get('/', (req,res) => res.send('Index Page'))

// app.put('/user', (req, res)=> {
//     // console.log(req.body)
//     // res.send('User info')
//     User.create({ email:req.body.email, password:req.body.password })
//     .then(result=>{
//         console.log("New user's auto-generated ID:", result.id);
//         res.send(result)
//     })
//     .catch(err => res.send(500, err.original.text))
// })

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
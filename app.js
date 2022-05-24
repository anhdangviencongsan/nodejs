const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port =3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


let routes = require('./routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: ' + port)


const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://anhdangvien:Abcd_1234%40%40@cluster0.khts4.mongodb.net/QRBASE");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
    
})

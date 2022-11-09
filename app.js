const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routers/aliens')
app.use(require('./routers/aliens',alienRouter))
const port=9000
app.listen(port, () => {
    console.log('Server started at  '+port)
})
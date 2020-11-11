const dotenv = require('dotenv').config
const express = require('express')
const cors = require('cors')
const db = require('./database/connection')

const port = process.env.PORT || 3333

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
    return response.send('API aabarbearia')
})

app.get('/cuts', async (request, response) => {
    //const cuts = await db('prices').select('*')

    return response.send('oi')
})

app.listen(port)
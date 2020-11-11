const dotenv = require('dotenv').config
const express = require('express')
const path = require('path')
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
    const cuts = await db('prices').select('*')

    const serializedCuts = cuts.map(cut => {
        return {
            id: cut.id,
            name: cut.cut,
            price: cut.price,
            image: `cuts-api.herokuapp.com/uploads/${cut.image}`
        }
    })

    return response.json(serializedCuts)
})

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(port)
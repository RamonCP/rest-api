const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const urlMongo = process.env.URL_MONGO

mongoose.connect(urlMongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const routes = require('./routes.js')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333)

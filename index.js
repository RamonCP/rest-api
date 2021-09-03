const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/books', (req, res) => {
  return res.json({ message: 'Olá mundo' })
})

app.listen(process.env.PORT || 3000)

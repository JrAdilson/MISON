const express = require('express')
const app = express()

require('./routes')(app)
app.get('/', (req, res) => res.status(200).send('JB'))
app.listen(3000)
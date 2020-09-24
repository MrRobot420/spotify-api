const express = require('express')
const bodyParser = require('body-parser')
const { router } = require('./router')
const app = express()
const cors = require('cors')
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(router)

app.listen(port, () => console.log(`app listening on port ${port}!`))
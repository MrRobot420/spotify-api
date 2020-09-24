const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/spotify-redirect', (req, res) => {
    console.log(req.body);
})

app.get('/get-profile', (req, res) => {
    console.log('REQUEST on get-profile')
    res.status(200).json({ response: 'OK' })
})

app.listen(port, () => console.log(`app listening on port ${port}!`))
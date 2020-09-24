const router = require('express').Router()
const { spotifyApi } = require('./services/spotify-api')
const { createAuthUrl, refreshToken } = require('./services/auth')

router.get('/spotify-redirect-token', async (req, res) => {
    console.log('GET request on /spotify-redirect-token')
    console.log(req.query)
    const response = await refreshToken(req.query.code)
    res.status(200).json(response)
})

router.get('/get-profile', async (req, res) => {
    console.log('GET request on /get-profile')
    const result = await spotifyApi.getMe()
    console.log(result)
    res.status(200).json({ response: 'OK' })
})

router.get('/get-auth-url', (req, res) => {
    console.log('GET request on /get-auth-url')
    const url = createAuthUrl()
    console.log(url)
    const link = `<a href=${url}>Check me out!</a>`
    res.status(200).send(link)
})

module.exports = {
    router
}
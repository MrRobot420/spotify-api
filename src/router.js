const router = require('express').Router()
const { spotifyApi } = require('./services/spotify-api')
const { createAuthUrl, refreshToken } = require('./services/auth')
const { getAllPlaylists, getPlaylist } = require('./services/spotify-service')
const { response } = require('express')

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

router.get('/get-playlists', async (req, res) => {
    console.log('GET request on /get-playlists')
    const response = await getAllPlaylists(req.body.user)
    res.status(200).json(response)
})

router.post('/get-playlist-by-id', async (req, res) => {
    console.log('GET request on /get-playlist-by-id')
    console.log(req.body)
    const response = await getPlaylist(req.body.id)
    res.status(200).json(response)
})

router.get('/get-playlist-by-id', async (req, res) => {
    console.log('GET request on /get-playlist-by-id')
    console.log(req.query)
    const response = await getPlaylist(req.query.id)
    res.status(200).json(response)
})

router.get('/get-devices', async (req, res) => {
    console.log('GET request on /get-devices')
    const response = await spotifyApi.getMyDevices()
    res.status(200).json(response)
})

router.post('/pause', async (req, res) => {
    console.log('GET request on /pause')
    console.log(req.body.id);
    const response = await spotifyApi.pause({device_id: req.body.id})
    res.status(200).json(response)
})

router.post('/play', async (req, res) => {
    console.log('GET request on /pause')
    console.log(req.body.id);
    const response = await spotifyApi.play({device_id: req.body.id})
    res.status(200).json(response)
})


module.exports = {
    router
}
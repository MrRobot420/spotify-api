const axios = require('axios').default
const config = require('config')

const createAuthUrl = () => {
    const baseUrl = `https://accounts.spotify.com/authorize?response_type=code`
    const clientId = `&client_id=${config.get('SECRETS.clientId')}`
    const scope = '&scope=playlist-read-private,user-read-private,user-read-email'
    const redirectUrl = `&redirect_uri=${config.get('REDIRECT_URL')}spotify-redirect-token/`
    return baseUrl + clientId + scope + redirectUrl
}

// The Code we use is only valid one time!!
const refreshToken = async (code) => {
    const url = "https://accounts.spotify.com/api/token"
    const redirectUrl = `${config.get('REDIRECT_URL')}spotify-redirect-token/`

    const requestBody = {
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUrl,
        client_secret: config.get('SECRETS.clientSecret'),
        client_id: config.get('SECRETS.clientId')
    }

    try {
        const res = await axios.post(url, null, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, params: requestBody } )
        console.log(res.data)
    } catch (err) {
        console.log(err.response)
    }
}

module.exports = {
    createAuthUrl,
    refreshToken
}
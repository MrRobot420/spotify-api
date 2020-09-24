const axios = require('axios').default
const config = require('config')

const getCode = async () => {
    const url = "https://accounts.spotify.com/authorize"
    const redirectUrl = "https://ee0b68026546.ngrok.io/spotify-redirect-token/"

    const params = {
        response_type: 'code',
        client_id: config.get('SECRETS.clientId'),
        scope: 'playlist-read-private',
        redirect_uri: redirectUrl
    }
    
    const res = await axios.get(url, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, params } )
    return res.data
}

// The Token we use is only valid for one time use!
const refreshToken = async (code) => {
    // await getCode() // --> Would need to be done from backend? --> BUT: User has to login in order for the code to be sent to the redirect_uri!!
    const url = "https://accounts.spotify.com/api/token"
    const redirectUrl = "https://ee0b68026546.ngrok.io/spotify-redirect-token/"

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
    getCode,
    refreshToken
}
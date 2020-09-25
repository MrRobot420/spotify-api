const SpotifyWebApi = require('spotify-web-api-node')
const config = require('config')

var scopes = 'user-read-private user-read-email playlist-read-private';
var spotifyApi = new SpotifyWebApi({
    clientId: config.get('SECRETS.clientId'),
    clientSecret: config.get('SECRETS.clientSecret'),
    redirectUri: 'https://ee0b68026546.ngrok.io/spotify-redirect'
});

spotifyApi.setAccessToken('BQCpsiUE3vCWkFm40v6uMJf66Bq40q3POM9IFJMUoo1mlNRHCCpo_V0C6S8Vs_KYwYDqsvoDvGUAGdiFMDJwpbORmIxxwOHhwbQ52Zpa4KsEHmBB67wBD4SIY6i912iU3h_UtPWJgnp_8BHN9T9GWvCezXzxy-C9Ys53Z0AZURw2QqA4KsCLLW7nmPVH7KOS')

module.exports = {
    spotifyApi
}
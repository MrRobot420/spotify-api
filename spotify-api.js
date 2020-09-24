const SpotifyWebApi = require('spotify-web-api-node')
const config = require('config')

var scopes = 'user-read-private user-read-email playlist-read-private';
var spotifyApi = new SpotifyWebApi({
    clientId: config.get('SECRETS.clientId'),
    clientSecret: config.get('SECRETS.clientSecret'),
    redirectUri: 'https://ee0b68026546.ngrok.io/spotify-redirect'
});

module.exports = {
    spotifyApi
}

// spotifyApi.getPlaylistTracks()
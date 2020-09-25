const SpotifyWebApi = require('spotify-web-api-node')
const config = require('config')

var scopes = 'user-read-private user-read-email playlist-read-private';
var spotifyApi = new SpotifyWebApi({
    clientId: config.get('SECRETS.clientId'),
    clientSecret: config.get('SECRETS.clientSecret'),
    redirectUri: 'https://ee0b68026546.ngrok.io/spotify-redirect'
});

spotifyApi.setAccessToken('BQC6rSaSN0A4pHbNkYNfhcAxnd2bu5TzEnfvJXhg0IDpjlEjWQPbJumEM3HT59NOUcICwaX-0zEu7I6pvbLWsotGTYULGVKYN26x3B3H63aplrGG9p3r0IfISlzFkviOMBsYmcDRNvkTIAfyXcdGAIT8jJaiRDcPTCj_hWg5tsYUP8nXFx6tTX9u28b8wu0LsTWpY-aD6w')

module.exports = {
    spotifyApi
}
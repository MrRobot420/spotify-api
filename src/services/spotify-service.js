const { spotifyApi } = require('./spotify-api')

const getAllPlaylists = async (user) => {
    const response = await spotifyApi.getUserPlaylists(user)
    const completeResponse = response.body
    completeResponse.items.forEach(item => {
        console.log(`Name: ${item.name}`)
        console.log(`ID: ${item.id}\n\n`)
    })
    
    return response.body
}

const getPlaylist = async (id) => {
    const response = await spotifyApi.getPlaylist(id)
    console.log(`Playlist ${id}: `, response.body)
    const playlistData = []

    response.body.tracks.items.forEach((track, idx) => {
        let artists = ''
        track.track.artists.forEach((artist, index) => {
            if (index == 0) {
                artists += artist.name    
            } else {
                artists += ' + ' + artist.name
            }
        })
        console.log(`Track: ${track.track.name}, ${artists}`);
        console.log()
        playlistData.push({ idx: idx+1, track: `${track.track.name}, ${artists}` })
        // playlistData.push(`${track.track.name}, ${artists}`)
    })
    return playlistData
}

module.exports = {
    getAllPlaylists,
    getPlaylist
}
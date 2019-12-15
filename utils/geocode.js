const request = require('request')

const geocode = (address, callback) => {
    const safeAddress = encodeURIComponent(address)
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${safeAddress}.json?access_token=pk.eyJ1Ijoiam9obndoZXJyaWNrIiwiYSI6ImNrM3g5ZnI4bDE1MjAzbHBkbWUzaDQyb3QifQ.yLnrnikubK5mm1ZwtNsRtA&limit=1`

    request({url, json: true}, (err, {body}) => {
        if (err) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to resolve location', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                lon: body.features[0].center[0],
                loc: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
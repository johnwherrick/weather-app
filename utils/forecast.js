const request = require('request')

const forecast = (lat, lon, callback) => {
    // String template for query
    const safeLat = encodeURIComponent(lat)
    const safeLon = encodeURIComponent(lon)

    const url = `https://api.darksky.net/forecast/a430b6cae75aa21c12a044691be18afd/${safeLat},${safeLon}?exclude=hourly,minutely,flags`
    request({url, json: true}, (err, {body}) => {
        if(err) {
            callback('Unable to contact weather services', undefined)
        } else if (body.code === 400) {
            callback('Weather for location not available')
        } else {
            const temperature = body.currently.temperature
            const precipProb = body.currently.precipProbability
            callback(undefined, 'Todays summary: ' + body.daily.data[0].summary + '\n' +
                                `It is currently ${temperature} degrees outside` + '\n' +
                                `There is a ${precipProb}% chance of precipitation`)
        }
    })
}

module.exports = forecast
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Destin', (err, res) => {
    if (err) {
        return console.log(err)
    }
    forecast(res.lat, res.lon, (error, forecast) => {
        if (err) {
            return console.log(err)
        }
        console.log(res.loc)
        console.log(forecast)
    })
})


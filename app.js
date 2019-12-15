const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Variable to hold location to get weather for
const location = process.argv[2]

if (location) {
    geocode(location, (err, res) => {
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
} else {
    console.log('You must enter a location. Try again!')
}
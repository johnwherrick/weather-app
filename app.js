const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Variable to hold location to get weather for
const location = process.argv[2]

if (location) {
    geocode(location, (err, {lat, lon, loc}) => {
        if (err) {
            return console.log(err)
        }
        forecast(lat, lon, (error, forecast) => {
            if (err) {
                return console.log(err)
            }
            console.log(loc)
            console.log(forecast)
        })
    })
} else {
    console.log('You must enter a location. Try again!')
}
const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=ace0a2bedd12ceea356021a84772d3e2&query=-0.8970118486723626,100.35076508280925'
request({ url: url }, (error, response) => {
// console.log(response)
const data = JSON.parse(response.body)
// console.log(data)
// console.log(data.current)
console.log(data.current.temperature)
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/padang.json?language=id&access_token=pk.eyJ1IjoiYWxpeGEwNyIsImEiOiJjbG4zZmtrdGowaXhhMmpudzBsajhlcjdhIn0.IYe6HT-oaSNbmuV_esV4zw&limit=1'
request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
})
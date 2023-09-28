const request = require('postman-request')


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/padang.json?language=id&access_token=pk.eyJ1IjoiYWxpeGEwNyIsImEiOiJjbG4zZmtrdGowaXhhMmpudzBsajhlcjdhIn0.IYe6HT-oaSNbmuV_esV4zw&limit=1'
request({ url: geocodeURL, json: true }, (error, response) => {
    console.log('Koordinat lokasi anda adalah', response.body.features[0].center[0] + ' ' + response.body.features[0].center[1])
    console.log('Data yang anda cari adalah' , response.body.query[0])
    console.log('Data yang ditemukan adalah', response.body.features[0].place_name)
    console.log('Tipe lokasi adalah', response.body.features[0].place_type[0])
})


const urlCuaca = 'http://api.weatherstack.com/current?access_key=ace0a2bedd12ceea356021a84772d3e2&query=-0.8970118486723626,100.35076508280925&units=m'
request({ url: urlCuaca, json: true }, (error, response) => {
    console.log('Saat ini suhu di ' + response.body.location.name + ' mencapai ' + response.body.current.temperature + ' derajat celcius')
    console.log('Kemungkinan terjadinya hujan adalah ' +  response.body.current.precip + ' %')
})

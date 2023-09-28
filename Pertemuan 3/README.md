<h1 float="left">
  <img src="https://readme-typing-svg.herokuapp.com?font=Urbanist&pause=1000&color=1EC309&width=700&lines=Modul+2+-+Node.js+Module+System+dan+Command+Line+Arguments" />
</h1>

<h2>
  A. HTTP Request  API Access Key
</h2>

<h4>
  a. Mendapatkan API Access Key
</h4>

   - API access key dari  https://weatherstack.com/ <br>
    ![api](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/73a009e5-c16e-4579-8f3f-bf4c5f7d0320)

  - Buka link untuk mendapatkan info dari weatherstack
    ```yml
    http://api.weatherstack.com/current?access_key=ace0a2bedd12ceea356021a84772d3e2&query=-0.8970118486723626,100.35076508280925
    ```
    ![info](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/8f262a95-c912-48b3-8f9b-c743da99d12a) <hr>

<h4>
  b. HTTP Request
</h4>

  - Install package postman-request dengan
    ```yml
    npm i postman-request
    ```

  - Tambahkan kode pada app.js
    ```yml
    const request = require('postman-request')
    const url = 'http://api.weatherstack.com/current?access_key=ace0a2bedd12ceea356021a84&query=-0.8970118486723626,100.35076508280925'
    request({ url: url }, (error, response) => {
    console.log(response)
    // const data = JSON.parse(response.body)
    // console.log(data)
    // console.log(data.current)
    // console.log(data.current.temperature)
    })
    ```

  - Jadikan baris ke-4 comment dan uncomment baris 5 dan 6 lalu jalankan program <br>
    ![56](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/cdc8c384-c1c7-4b85-b788-62ec48cf67f1) <br>
    Menampilkan data terkait lokasi Universitas Negeri Padang

  - Jadikan baris ke-6 comment dan uncomment baris 7 lalu jalankan <br>
  ![current](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/57069127-40f4-419b-a71b-2f6b32907842) <br>
  Menampilkan data terkini pada Universitas Negeri Padang

  - Jadikan baris ke-7 dan uncomment baris 8 lalu jalankan <br>
  ![suhucurrent](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/eadaeacb-90a9-4bbe-b0d2-01f7526c6beb) <br>
  Menampilkan suhu terkini pada Universtias Negeri Padang
   
  - Tambahkan kode pada cekCuaca.js
    ```yml
    const request = require('postman-request')
    const urlCuaca = 'http://api.weatherstack.com/current?access_key=ace0a2bedd12ceea356021a84&query=-0.8970118486723626,100.35076508280925'
    request({ url: urlCuaca, json: true }, (error, response) => {
    console.log('Saat ini suhu diluar mencapai ' + response.body.current.temperature + ' derajat celcius. Kemungkinan terjadinya hujan adalah ' + response.body.current.precip + '%')
    })
    ```

  - Kita juga bisa menggunakan beberapa parameter yang disediakan weatherstack <br>
    ![dokumentasi](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/3ad06ff5-de93-4392-9ef2-e74dc767a080)

  - Ubah kode pada urlCuaca menjadi
      ```yml
      const urlCuaca = 'http://api.weatherstack.com/current?access_key=ace0a2bedd12ceea356021a84&query=-0.8970118486723626,100.35076508280925&units=f'
      ```

  - Hasil <br>
    ![fahren](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/d015525d-bb55-42b1-a397-b2d15b678b77) <hr>


<h4>
  c. Latihan 1 - API Access Weatherstack
</h4>

  - Kode untuk mengakses weather_descriptions
    ```yml
    console.log('Cuaca saat ini ' + response.body.current.weather_descriptions[0])
    ```

  - Hasil <br>
    ![weather_desc](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/e9aedce8-92a7-4bfb-bab5-8048c76ad1d2) <hr>


<h4>
  d. Latihan 2 - API Mapbox
</h4>    

   - Kode request data
     ```yml
     const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/padang.json?language=id&access_token=pk.eyJ1IjoiYWxpeGEwNyIsImEiOiJjbG4zZmtrdGowaXhhMmpudzBsajhlcjdhIn0.IYe6HT-oaSNbmuV_esV4zw&limit=1'
     request({ url: geocodeURL, json: true }, (error, response) => {
     const latitude = response.body.features[0].center[1]
     const longitude = response.body.features[0].center[0]
     console.log(latitude, longitude)
     })
     ```

  - Hasil <br>
    ![mapbox](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/3a9acf8b-f269-4828-95ae-d720c8c3a015)

  - Hasil saat array pada center diganti <br>
    ![mapbox1](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/c1ef71e9-07f2-4a05-a6ed-90398a0ca281) <hr>


<h4>
  e. Latihan 3 - Memanggil Data API
</h4>    

  - Kode pada cekCuaca.js
    ```yml
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
    ```

  - Hasil <br>
    ![d](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/f0f673e3-ed7b-483f-b836-ecc2424ec8a5) <hr>

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

    

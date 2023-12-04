<h1 float="left">
  <img src="https://readme-typing-svg.herokuapp.com?font=Urbanist&pause=1000&color=1EC309&width=700&lines=Modul+2+-+Node.js+Module+System+dan+Command+Line+Arguments" />
</h1>

<h2>
  LATIHAN
</h2>

<h4>
  a. Instalasi Express.js dan membuat halaman menggunakan fungsi app.get
</h4>
<hr>

  - Generate file json
    ```yml
    npm init -y
    ``` 
    
    ![generatejson](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/52219acb-c532-43d0-aaae-85a903e85d13)

  - Install package express.js
    ```yml
    npm i express
    ```

    ![express](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/de8ea59d-fed9-401e-9e7b-a877895b16f0)

  - Kode dalam file app.js
    ```yml
    const express = require('express')
    const app = express()
    //ini halaman/page utama
    app.get('', (req, res) => {
    res.send('Selamat datang di halaman utama')
    })
    //ini halaman bantuan/FAQ (Frequently Asked Questions)
    app.get('/bantuan', (req, res) => {
    res.send('Ini halaman bantuan')
    })
    //ini halaman infoCuaca
    app.get('/infoCuaca', (req, res) => {
    res.send('Ini halaman info cuaca')
    })
    //ini halaman tentang
    app.get('/tentang', (req, res) => {
    res.send('Ini halaman tentang')
    })

    app.listen(4000, () => {
    console.log('Server berjalan pada port 4000.')
    })
    ```

  - Jalankan dengan
    ```yml
    node app.js
    ```

    ![infocuaca](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/1e92a3f5-19b0-4d17-a0fe-42ef69aa87e8)
    <hr>

<h4>
  b. Integrasi HTML dan JSON pada Express.js
</h4>
<hr>

  - Cobalah ganti teks selamat datang di halaman utama dengan kode html <h1> sehingga menjadi
    ```yml
    res.send('<h1>Selamat datang di halaman utama</h1>')
    ```

  - jalankan app.js dengan
    ```yml
    nodemon app.js
    ```

    ![app](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/a33897d4-bd1e-42d7-b2c5-99c89984c38c) <br>
    ![main](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/871658db-fd10-4a49-b4fd-247e51ff6516)

  - Bukalah aplikasi anda di browser dan pastikan anda beradal url halaman tentang.
http://localhost:4000/tentang

  - Ubah juga teks untuk halaman bantuan dan halaman infoCuaca. Tambahkan teks pada
halaman bantuan dengan kode HTML <h1> dan teks infoCuaca dengan kode JSON yang
berisi dua objek yaitu prediksiCuaca: ‘cuaca berpotensi hujan’ dan lokasi:
‘Padang’, sama seperti yang anda lakukan pada halaman tentang.

<br> ![ttg](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/bf96242e-e06f-48a5-abba-c105a52e3b41)




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

  - Cobalah ganti teks selamat datang di halaman utama dengan kode html ```yml <h1>``` sehingga menjadi
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

  - Ubah juga teks untuk halaman bantuan dan halaman infoCuaca. Tambahkan teks pada halaman bantuan dengan kode HTML ```yml <h1>``` dan teks infoCuaca dengan kode JSON yang berisi dua objek yaitu prediksiCuaca: ‘cuaca berpotensi hujan’ dan lokasi: ‘Padang’, sama seperti yang anda lakukan pada halaman tentang.

<br> ![ttg](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/bf96242e-e06f-48a5-abba-c105a52e3b41)
<hr>

<h4>
  C. Akses Static Assets pada Expressjs menggunakan Path module
</h4>
<hr>

  - Buatlah file baru pada folder public dan beri nama index.html dan tambahkan kode html berikut
    ```yml
    <!DOCTYPE html>
    <html>
      <head></head>
    <body>
      <h1>Ini adalah halaman utama statis</h1>
    </body>
    ```

  - Selanjutnya, pada file app.js di folder src, tambakan kode berikut ini
    <br> 
![appp](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/402168dd-2a59-4cd2-9034-c28875192d77)
<br>

  - Lanjutkan program dengan membuat dua file html lagi pada folder public dengan nama tentang.html dan bantuan.html. Silakan isi file html dengan baris kode html seperti pada halaman index.html. Gantilah teks pada baris kode ```yml <h1>``` agar sesuai dengan nama halaman
    <br>![tb](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/4a75fb09-e092-474f-80f1-58d4cc6b3390)
<br>

  - Selanjutnya buatlah folder baru pada folder public dengan nama css. Lalu, dalam folder tersebut, buatlah file baru dengan nama styles.css. Lalu tambahkanlah kode berikut ini
  ```yml
  h1 {
color: grey;
}
img {
width: 250px;
}
```

  - Selanjutnya tambahkan baris kode berikut pada file index.html pada didalam heading <head>. Lakukan yang sama untuk file bantuan.html dan tentang.html
  ```yml
  <link rel="stylesheet" href="/css/styles.css">
```

  - Buatlah satu folder baru lagi di folder public dengan nama js. Lalu buatlah file baru dalam folder tersebut dengan nama app.js dan tambahkan kode berikut ini
```yml
    console.log('Client side javascript file diproses')
  ```

  - Lalu tambahkan lagi baris kode berikut pada file index.html, tepat dibawah baris kode pada nomor 6
    ```yml
    <script src="/js/app.js"></script>
    ```

  - Jalankan program pada browser
    <br> ![client](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/10679416-2264-42a2-9a78-b5fe4bc64678)
<br>

  - Selanjutnya buatlah folder baru lagi dengan nama img. Lalu masukanlah sebuah gambar berformat .png ke folder tersebut. Direkomendasikan memasukan foto anda.
  <br>
  - Lalu tambahkan baris kode berikut pada file tentang.html tepat dibawah kode ```yml <h1>``` pada bagian <body>
  ```yml
<img src="/img/ISI_DENGAN_NAMA_FILE_GAMBAR_ANDA.png">
  ```

  - Silakan buka localhost pada browser anda untuk mengakses halaman tentang, bantuan dan halaman utama. Pastikan akhir halaman anda berekstensi .html. Contoh: http://localhost:4000/tentang.html
    <br>![ttttg](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/f22d680d-99cd-4d9c-bfe1-fd46db3cc37c)
<br><hr>


<h4>
  D. Templating pada Expressjs menggunakan Handlebars.js
</h4>
<hr>


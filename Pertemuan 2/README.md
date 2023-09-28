<h1 float="left">
  <img src="https://readme-typing-svg.herokuapp.com?font=Urbanist&pause=1000&color=1EC309&width=700&lines=Modul+2+-+Node.js+Module+System+dan+Command+Line+Arguments" />
</h1>

<h2>
  A. NODE.JS MODULE SYSTEM
</h2>

<h4>
  a. Import Core Module Node.js
</h4>

  - Buat folder baru buku-catatan dan file app.js
    
    ```yml
    const fs = require('fs')
    fs.writeFileSync('catatan.txt', 'Nama Saya Randi Proska')

    ```

   - Lalu file catatan.txt telah dibuat <br>
     ![catatan](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/130a0889-6f82-4d40-894b-9a7b5b0fb5ce) <br>
     ![catatan1](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/79725d59-8915-40d0-829b-0965eca8c20e)

   - Tambahkan kode berikut diline ke-3

     ```yml
     fs.appendFileSync('catatan.txt', ' Saya tinggal di Padang')
     ```

  - Setalah itu teks dalam catatan.txt akan berubah <br>
    ![catatan2](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/168e4793-40dc-4e88-b836-2c0d801345f5)
    <hr>

<h4>
  b. Import File Pada Node.js
</h4>

  - Buat file dengan baru catatan.js lalu tambahkan kode berikut

    ```yml
    const ambilCatatan = function () {
    return 'Ini Catatan Randi Proska...'
    }
    module.exports = ambilCatatan
    ```

  - Lalu tambahkan kode berikut pada file app.js

    ```yml
    const catatan = require('./catatan.js')
    const pesan = catatan()
    console.log(pesan)
    ```

  - Lalu jalankan program pada terminal dan akan tampil sbg berikut
    ![appjs](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/9008aae3-7e06-4e23-bda3-7b9b3b1620d4)
    <hr>

<h4>
  c. Import npm (Node Package Manager) Pada Node.js
</h4>

  - Install npm init pada direktori buku-catatan

     ```yml
     npm init
     ```

  - Install validator dengan versi versi 13.11.0
    ```yml
    npm i validator@13.11.0
    ```
    
    ![npmvalidator](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/25bf8bbb-4cf4-4d0b-8e16-8f949f219193)

  - Tambahkan kode berikut pada app.js
    ```yml
    const validator = require('validator')
    const ambilCatatan = require('./catatan.js')
    const pesan = ambilCatatan()
    console.log(pesan)
    console.log(validator.isURL('https://proska.com'))
    ```

  - Lalu jalankan pada terminal dan akan tampil sebagai berikut <br>
    ![app2](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/4147238e-4ca1-453f-ae5d-64211cd35acb)<hr>

<h4>
  d. Latihan 1
</h4>

  - Install package chalk versi 4.1.2 dengan
    ```yml
    npm i chalk@4.1.2
    ```

  - Gunakan kode berikut untuk mencetak teks "print warna biru sukes"
    ```yml
    const chalk = require('chalk');

    console.log(chalk.blue('print warna biru sukes'));
    ```
  - Berikut hasil outputnya <br>
    ![chalk](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/ed332075-8678-4e4a-a4a8-b83d69aad39e)<hr>
    
<h4>
  e. Latihan 2
</h4>

  - Install package nodemon dengan
    ```yml
    npm i nodemon
    ```

  - Jalankan aplikasi dengan 'nodemon app.js'
    ```yml
    nodemon chalk.js
    ```
    maka aplikasi akan berjalan secara realtime, jika kita mengubah kode pada program maka outputnya akan berubah otomatis pada terminal

  - berikut hasil outputnya <br>
    ![nodemon](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/9df3b8be-78ce-48eb-83a4-d3a5966a32e8)
    <br><br><hr><hr>

<h2>
  B. COMMAND LINE ARGUMENTS
</h2>

<h4>
  a. Mendapatkan Input Dari Pengguna
</h4>

  - Ketikan kode berikut pada app.js
    ```yml
    const ambilCatatan = require('./catatan.js')
    const command = process.argv[2]
    console.log(process.argv)
    ```

  - Jalankan pada terminal dengan menambahkan argumen dibelakangnya <br>
  ![argumen](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/0be1482d-af9b-4c49-ac0d-ab745e68b33c)

  - Kita bisa memasukkan array pada consolenya untuk memilih data pada urutan keberapa yang ingin ditampilkan
    ```yml
    console.log(process.argv[2])
    ```
    kita akan menampilkan data pada array ke-2 yaitu alixa
    ![array2](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/f0168c18-f729-41f8-82e7-ff28187f81a3)
  - Tambahkan kode berikut dibawahnya
    ```yml
    if (command === 'tambah') {
    console.log('Tambah Catatan')
    } else if (command === 'hapus') {
    console.log('Hapus Catatan')
    }
    ```

  - 


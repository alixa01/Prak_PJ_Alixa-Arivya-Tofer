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

  - Hasil <br>
  ![tambahctt](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/7a7b227e-4b04-45a2-a2cc-2a8535522a96)


<h4>
  b. Argument Parsing (Penguraian Argumen)
</h4>

  - Install package yargs dengan
    ```yml
    npm i yargs
    ```

  - Masukkan kode berikut ke app.js
    ```yml
    const yargs = require('yargs')
    const catatan = require('./catatan.js')
    // Kustomisasi versi yargs
    yargs.version('10.1.0')
    // Membuat perintah (command) 'tambah'
    yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    handler: function () {
        console.log('Sebuah catatan baru ditambahkan!')
    }
    })
    // Perintah hapus
    yargs.command({
    command: 'hapus',
    describe: 'hapus catatan',
    handler: function () {
        console.log('Catatan berhasil dihapus')
    }
    })
    // Instruksi no.4 letakan disini
    // letakan bagian ini pada baris terakhir
    console.log(yargs.argv)
    ```

  - Menambahkan catatn dengan node app.js tambah <br>
    ![tambahctt2](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/73f85eab-8560-4f65-877b-4e1a1c0a0287)

  - Kode menampilkan list catatan
    ```yml
    yargs.command({
    command: 'list',
    describe: 'Menampilkan catatan',
    handler: function (){
        console.log('List catatan')
    }
    })
    ```

  - Ganti kode pada command tambah dengan
    ```yml
    yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Judul: ' + argv.judul)
        console.log('Isi: ' + argv.isi)
    }
    })
    ```

  - Hasil <br>
  ![cttpertama](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/499bcfc3-d912-4385-9cee-a2122ec0b310)


<h4>
  c. Menyimpan Data Dengan JSON
</h4>

  - Tambahkan kode berikut
    ```yml
    const fs = require('fs')
    const buku = {
    judul: 'Pemrograman Jaringan',
    penulis: 'Randi Proska Sandra'
    }
    const bookJSON = JSON.stringify(buku)
    fs.writeFileSync('1-jsontest.json', bookJSON)
    ```

  - Saat dijalankan file .json akan terbuat otomatis <br>
  ![jsontest](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/3b5b3d23-4072-46f3-977c-fbc1af62c1ee)


<h4>
  d. Membaca Data JSON
</h4>  

  - Tambahkan kode berikut
    ```yml
    const fs = require('fs')
    const dataBuffer = fs.readFileSync('1-jsontest.json')
    const dataJSON = dataBuffer.toString()
    const data = JSON.parse(dataJSON)
    console.log(data)
    ```

  - Saat dijalankan maka akan membaca data yang ada di 1-jsontest.json <br>
  ![bacajson](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/f1bf7fe6-eea5-469f-be41-0a21be63ef94)

  - Kita juga bisa mengubah
    ```yml
    console.log(data)
    ```
    Menjadi
    ```yml
    console.log(data.judul)
    ```

  - Saat dijalankan maka akan menampilkan nilai judul yang ada pada json <br>
  ![juduljson](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/b869b953-6f65-46d8-b08a-75cbf1393cc6) <br>
  begitupun untuk data.penulis maka akan menampilkan nilai penulis


<h4>
  e. Latihan Menyempurnakan Aplikasi Buku-catatan
</h4> 

  - Menambahkan catatan
      - Menambahkan catatan baru
          - Ganti kode pada handle command tambah dengan
            ```yml
            handler: function (argv) {
            catatan.tambahCatatan(argv.judul, argv.isi)
            }
            ```

          - Ubah kode pada catatan.js dengan
            ```yml
            const fs = require('fs')
            const ambilCatatan = function () {
            return 'Ini Catatan Randi Proska...'
            }
            const tambahCatatan = function (judul, isi) {
            const catatan = muatCatatan()
            const catatanGanda = catatan.filter(function (note) {
            return note.title === judul
            })
            if (catatanGanda.length === 0) {
            catatan.push({
            judul: judul,
            isi: isi
            })
            simpanCatatan(catatan)
            console.log('Catatan baru ditambahkan!')
            } else {
            console.log('Judul catatan telah dipakai')
            }
            }
            const simpanCatatan = function (catatan) {
            const dataJSON = JSON.stringify(catatan)
            fs.writeFileSync('catatan.json', dataJSON)
            }
            const muatCatatan = function () {
            try {
            const dataBuffer = fs.readFileSync('catatan.json')
            const dataJSON = dataBuffer.toString()
            return JSON.parse(dataJSON)
            } catch (e) {
            return []
            }
            }
            module.exports = {
            ambilCatatan: ambilCatatan,
            tambahCatatan: tambahCatatan
            }
            ```

          - Jalankan kode dengan
            ```yml
            node app.js tambah --judul="Catatan 1", --isi="Isi Catatan 1"
            ```

          - Saat dijalankan maka akan dibuat file catatan.json <br>
          ![catatnjson](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/8a4fadbe-6131-4f6d-ac86-a3692c71bf22)


      - Menghapus catatan
          - Ubah kode pada command hapus dengan
            ```yml
            yargs.command({
            command: 'hapus',
            describe: 'hapus catatan',
            builder: {
            judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
            },
            },
            handler: function (argv) {
            catatan.hapusCatatan(argv.judul)
            }
            })
            ```

          - Tambahkan kode berikut pada catatan.js dibawah fungsi tambahCatatan
            ```yml
            const hapusCatatan = function (judul) {
            const catatan = muatCatatan()
            const catatanUntukDisimpan = catatan.filter(function (note) {
            return note.judul !== judul
            })
            if (catatan.length > catatanUntukDisimpan.length) {
            console.log(chalk.green.inverse('Catatan dihapus!'))
            simpanCatatan(catatanUntukDisimpan)
            } else {
            console.log(chalk.red.inverse('Catatan tidak
            ditemukan!'))
            }
            ```

          - Tambahkan module.exports pada catatan.js dengan
            ```yml
            hapusCatatan: hapusCatatan
            ```

          - Jalankan program melalui terminal dengan
            ```yml
            node app.js hapus --judul="Catatan 1"
            ```

          - Catatan berhasil dihapus <br>
          ![hapusctt](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/0e921be9-eb0e-4236-b9cc-d60e96e685b7)

    - Menampilkan catatan
        - Ubah kode pada command list dengan
          ```yml
          yargs.command({
          command: 'list',
          describe: 'Menampilkan catatan',
          handler: function (){
          const catatan = 'catatan.json';

          fs.readFile(catatan, 'utf8', (err, data) => {
            if (err) {
                console.error(`Terjadi kesalahan saat membaca file ${catatan}:`, err);
                return;
            }

            try {
                const jsonObject = JSON.parse(data);
                console.log('Nilai dari file JSON:');
                console.log(jsonObject);
            } catch (error) {
                console.error(`Terjadi kesalahan saat mengurai JSON dalam file ${catatan}:`, error);
            }
            });
            }
            })
          ```

        - Jalankan program dengan
          ```yml
          node app.js list
          ```


        - Hasil <br>
        ![listctt](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/e77f50c7-a196-4964-9725-74418fa9d35c)

# Prak_PJ_Alixa-Arivya-Tofer



<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Josefin+Sans&weight=700&size=30&pause=1000&center=true&vCenter=true&width=435&lines=Hi+There+%F0%9F%91%8B;I'm%2C+Alixa+Arivya+Tofer"/>
</h1>




 * # Modul 1 - Pengantar Pemograman Berbasis Jaringan
- Program Hello World
    - Buat file dengan nama hello.js lalu ketikkan kode dibawah
    ```yml
    console.log('Welcome to Node.js!')
   ```
    console.log pada javascript berfungsi untuk menampilkan teks ke Console Javascript
    - Jalankan file tersebut dan lihat bagaimana hasilnya. 
    ![hellow world term](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/e5910700-b035-4aec-838a-8943854e1a27)
    - Buatlah sebuah file baru lagi dengan nama hello-world.js pada folder yang sama
dan cobalah ketikan kode berikut ini
    ```yml
    const http = require('http');

  const hostname = '127.0.0.1'
  const port = 3000;

  const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World');
  })

  server.listen(port, hostname, () => {
      console.log(\`Server running at http://${hostname}:${port}/`);
  })
    ```
    - Jalankan program tersebut dan akan muncul informasi Server running at
http://127.0.0.1:3000/
![web](https://github.com/alixa01/Prak_PJ_Alixa-Arivya-Tofer/assets/94752755/2d569a99-7b24-45e4-b336-2b43cb487fb8)

<hr>

* # Modul 2 - Node.js Module System dan Command Line Arguments
<h4>
  A. Import Core Module Node.js
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
  B. Import File Pada Node.js
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

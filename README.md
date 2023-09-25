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



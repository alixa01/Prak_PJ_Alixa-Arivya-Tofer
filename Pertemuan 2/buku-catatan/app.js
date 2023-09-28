const fs = require('fs')
// fs.writeFileSync('catatan.txt', 'Nama Saya Randi Proska')
// fs.appendFileSync('catatan.txt', ' Saya tinggal di Padang')

//Import File Pada Node.js

// const catatan = require('./catatan.js')
// const pesan = catatan()
// console.log(pesan)

//Import npm Pada Node.js

// const validator = require('validator')
// const ambilCatatan = require('./catatan.js')
// const pesan = ambilCatatan()
// console.log(pesan)
// console.log(validator.isURL('https://proska.com'))

//Mendapatkan Input Dari Pengguna

// const ambilCatatan = require('./catatan.js')
//
// const command = process.argv[2]
// console.log(process.argv)
//
// if (command === 'tambah') {
// console.log('Tambah Catatan')
// } else if (command === 'hapus') {
// console.log('Hapus Catatan')
// }


const yargs = require('yargs')
const catatan = require('./catatan.js')
// Kustomisasi versi yargs
yargs.version('10.1.0')
// Membuat perintah (command) 'tambah'
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
        catatan.tambahCatatan(argv.judul, argv.isi)
    }
})
// Perintah hapus
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
console.log(yargs.argv)

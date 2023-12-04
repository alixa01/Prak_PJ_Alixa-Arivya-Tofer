const express = require('express')
const app = express()
//ini halaman/page utama
app.get('', (req, res) => {
    res.send('<h1>Selamat datang di halaman utama</h1>')
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
    res.send([{
        nama: 'Randi Proska Sandra',
        pekerjaan: 'Dosen'
    }])
})

app.listen(4000, () => {
    console.log('Server berjalan pada port 4000.')
})
const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')


const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)
// app.use(express.static(direktoriPublic))
//ini halaman utama
app.get('', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Randi Proska Sandra'
    })
})
//ini halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Randi Proska Sandra'
    })
})
//ini halaman bantuan/FAQ (Frequently Asked Questions)
app.get('/bantuan', (req, res) => {
    res.render('tentang', {
        judul: 'Ini Halaman bantuan',
        teksBantuan: 'ini adalah teks bantuan'
    })
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
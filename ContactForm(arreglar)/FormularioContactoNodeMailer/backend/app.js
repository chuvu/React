var nodemailer = require('nodemailer');
var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express();

app.use(cors())
app.use(bodyParser.json())

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'auregaputra@gmail.com',
        clientId: '101499267160-4smh70eia676hr9inctkepjtvosi82sg.apps.googleusercontent.com',
        clientSecret: 'On0NXlxqwXQkVDevpKGk-BRR',
        refreshToken: '1/i3H6wHsX7Lz49zl8Az7VHOqPwrBXv6zmg_hjpxMMGLA',
    }
})

app.post('/testsend', (req, res)=>{
    var sendemail = {
        to: req.body.Email,
        subject: req.body.Judul,
        text: req.body.Isi,
    }

    transporter.sendMail(sendemail, (x,y)=>{
        res.send("Email suskes terkirim")
        if(x){
            console.log('Email gagal terikirm')
            res.send('Email gagal terikirm')
        }
        else{
            console.log('Email berhasil terkirim')
            res.send('Email berhasil terkirim')
        }
    })
})




app.listen(3410, ()=>{
    console.log('Run @3410');
})
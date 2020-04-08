const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path');
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.use(express.static(path.join(__dirname, 'portfolio/build')));
app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlMail = `
            <h3>Contact Info</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Message: ${req.body.message}</li>
            </ul>`
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "haylie.stanton87@ethereal.email", // generated ethereal user
                pass: "z4xNJHa812QCETmyQU" // generated ethereal password
            }
        })

        let mailOptions = {
            from: req.body.email, 
            to: "haylie.stanton87@ethereal.email",
            subject: "Message From Portfolio", 
            text: req.body.message, 
            html: htmlMail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log("sent message %s", info)
            console.log("URL: %s", nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})
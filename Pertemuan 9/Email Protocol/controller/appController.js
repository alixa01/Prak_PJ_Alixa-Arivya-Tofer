const nodemailer = require("nodemailer");
const Mailgen = require("mailgen")
const {EMAIL, PASSWORD} = require("../env.js")

// send mail from testing account
const signup = async (req, res) => {
 
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: testAccount.user,
          pass: testAccount.pass
        }
    });


    const message = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      }
      

    transporter.sendMail(message).then((info) => {
        return res.status(201)
        .json({ 
            msg: "you should receive an email",
            info : info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("Signup Succesfully...!");
}


// send mail from real gmail account
const getbill = (req, res) => {

    const { userEmail } = req.body;


    let config = {
        service: "gmail",
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "salted",
        product: {
            name: "Paypal",
            link: "https://mailgen.js",
            logo: "https://w7.pngwing.com/pngs/803/833/png-transparent-logo-paypal-computer-icons-paypal-blue-angle-logo.png",
            logoHeight: '60px'
        }
    })

    let response = {
        body: {
            name: "Alixa Arivya Tofer",
            intro: "Last chance to get $5 off your next purchase of $10 or more.<br>Just activate this offer and choose PayPal at checkout",
            action: {
                button: {
                    color: '#010676', // Optional action button color
                    text: 'Activate $5 offer',
                    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
                }
            }
        },
        outro: "Offer expires 12/12/23"
    }
    

    let mail = MailGenerator.generate(response)


    let message = {
        from: EMAIL, 
        to: userEmail,
        subject: "PAYPAL BONUS",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("getBill Succesfully...!");
}

module.exports = {
    signup,
    getbill
}
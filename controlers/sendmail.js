
import nodemailer from 'nodemailer'


export const register=(req,res)=>{

const transport=nodemailer.createTransport({
host: process.env.MAIL_HOST,
port: process.env.MAIL_PORT,
auth:{
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASS,
}

})
transport.sendMail({
    from:`jakanaka azad group ${process.env.MAIL_ADDRESS}`,
    subject:"this is test mail",
    to:req.body.email,
    text:"he man please check this email "
})
    res.json(req.body)
}

console.log(process.env.MAIL_PASS);
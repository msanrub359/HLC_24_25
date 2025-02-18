import nodemailer from "nodemailer"
import {config} from 'dotenv'

config();

const transporter= nodemailer.createTransport({
    service: 'gmail',
    auth:{ //credenciales del servidor de correo
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASS,
    },
    secure:false,
    port: 465

})

 export const sendMail=async(to, subject, html)=>{
    try {
        const info= transporter.sendMail({
            from:process.env.EMAIL_USER,
            to,
            subject,
            html
        })
        console.log(`Correo enviado: ${info.messageId}`);
    } catch (error) {
        console.log(`Correo no enviado: ${error}`); 
    }
}
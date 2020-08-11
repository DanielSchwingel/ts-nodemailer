import nodemailer from 'nodemailer';

interface IMailSettings {
    host: String,
    port: Number,
    secure: Boolean,
    auth: {
      user: String, 
      pass: String, 
    },
}

interface IMailTo{
    from: String,
    to: String;
}

interface IMailMessageDTO{
    settings: IMailSettings,
    to: IMailTo,

}

class EmailService {

    async sendEmail({settings, to}: IMailMessageDTO){
        let teste =  settings.host;
        const transporter = nodemailer.createTransport({
            host: String(settings.host),
            port: Number(settings.port),
            secure: Boolean(settings.secure),
            auth: {
                user: String(settings.auth.user),
                pass: String(settings.auth.pass)             
            }
        })
        
        await transporter.sendMail({
            from: String(to.from),
            to: String(to.to),
            replyTo: String(to.from),
            subject: 'Assunto do E-Mail',
            text: 'Hello world with TEXT', 
            html: '<b>Hello world with HTML</b>', 
        })
        .then(info => console.log(info))
        .catch(error => console.error(error));
    }
}

export default EmailService;
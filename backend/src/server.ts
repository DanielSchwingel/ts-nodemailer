import express from 'express';
import EmailService from './services/EmailService';
const app = express();

const PORT: Number = 3333;


app.get('/', (req, res) => {
    const emailService = new EmailService();

    emailService.sendEmail({
        settings : {
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'danielfilipeschwingel@gmail.com',
                pass: '******'
            }
        },
        to: {
            from: 'danielfilipeschwingel@gmail.com',
            to: 'danielfilipeschwingel@gmail.com'
        }

    })
});

app.listen(PORT, ()=>{
    console.log(`Server is running of the port ${PORT}`)
});
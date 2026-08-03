require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Konfiguracija Nodemailer-a za Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Ruta za slanje emaila
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Sva polja su obavezna.' });
  }

  try {
    // 1. Email koji stiže TEBI (Notifikacija o novoj poruci sa sajta)
    const mailToYou = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // Tvoj email
      subject: `Novi kontakt sa Portfolija od: ${name}`,
      text: `Dobili ste novu poruku od: ${name} (${email})\n\nPoruka:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <h2 style="color: #1e293b;">Nova poruka sa tvog Portfolija!</h2>
          <p><strong>Ime:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #10b981; margin-top: 15px;">
            <p style="margin: 0;">${message}</p>
          </div>
        </div>
      `,
    };

    // 2. Email koji stiže KLIJENTU (Zahvalnica / Auto-reply)
    const mailToClient = {
      from: `"Emir Bihorac" <${process.env.EMAIL_USER}>`,
      to: email, // Email klijenta koji je popunio formu
      subject: `Thank you for getting in touch!`,
      text: `Hello ${name},\n\nThank you for reaching out! I have received your message and will get back to you within 24 hours.\n\nBest regards,\nEmir Bihorac`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; color: #334155;">
          <h2 style="color: #10b981;">Hello ${name},</h2>
          <p>Thank you for taking the time to reach out to me through my portfolio website.</p>
          <p>This is an automated message just to let you know that I have successfully received your inquiry. I will review it and get back to you <strong>within 24 hours</strong>.</p>
          <br>
          <p>Best regards,</p>
          <p><strong>Emir Bihorac</strong><br>Full Stack Developer</p>
        </div>
      `,
    };

    // Šaljemo oba emaila paralelno
    await Promise.all([
      transporter.sendMail(mailToYou),
      transporter.sendMail(mailToClient),
    ]);

    res
      .status(200)
      .json({ success: true, message: 'Email successfully sent!' });
  } catch (error) {
    console.error('Greška pri slanju emaila:', error);
    res
      .status(500)
      .json({ error: 'Došlo je do greške prilikom slanja emaila.' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Backend server pokrenut na portu ${PORT}`);
  });
}

module.exports = app;

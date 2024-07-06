import { Router } from "express";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../controllers/data.js";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "77bdf2002@smtp-brevo.com",
    pass: process.env.NodeMailerPass,
  },
});

var router = Router();

/* GET home page. */
router.use("/", async function (req, res, next) {
  var data = req.body;
  // console.log("this is the book session contorller", data);

  let { name, email, phone, sessionType, date, time, notes } = data;

  try {
    const docRef = await addDoc(collection(db, "photosessions"), {
      name: name,
      email: email,
      phone: phone,
      sessionType: sessionType,
      date: date,
      time: time,
      notes: notes,
    });
    // console.log("Document written with ID: ", docRef.id);

    const mailOptions = {
      from: "emmanuel.sheshi101@gmail.com",
      to: "emmanuel.sheshi@gmail.com",
      subject: "New Booking Notification",
      html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Booking Notification</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #f4f4f4; border-radius: 5px; padding: 20px; margin-bottom: 20px;">
            <h1 style="color: #2c3e50; text-align: center;">New Booking Notification</h1>
        </div>
        <p style="margin-bottom: 15px;">A new booking has been made:</p>
        <ul style="background-color: #e8f4fd; border-radius: 5px; padding: 15px; list-style-type: none;">
            <li style="margin-bottom: 10px;"><strong>Customer:</strong> ${name}</li>
            <li style="margin-bottom: 10px;"><strong>Session Type:</strong> ${sessionType}</li>
            <li style="margin-bottom: 10px;"><strong>Date:</strong> ${date}</li>
            <li style="margin-bottom: 10px;"><strong>Time:</strong> ${time}</li>
        </ul>
        <p style="margin-top: 20px;">Customer's contact details:</p>
        <p style="margin-bottom: 5px;">
            <strong>Email:</strong> 
            <a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a>
        </p>
        <p style="margin-bottom: 20px;">
            <strong>Phone:</strong> 
            <a href="tel:${phone}" style="color: #3498db; text-decoration: none;">${phone}</a>
        </p>
        <div style="background-color: #f4f4f4; border-radius: 5px; padding: 15px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">Please ensure to follow up with the customer if necessary.</p>
        </div>
    </body>
    </html>
      `,
      text: `New Booking Notification:
    
    Mr/Mrs ${name} has booked a ${sessionType} session for ${date} at ${time}.
    Customer's email: ${email}
    Contact number: ${phone}
    
    Please ensure to follow up with the customer if necessary.`,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("email sent" + info.response);
      }
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  res.redirect("/");
});

export default router;

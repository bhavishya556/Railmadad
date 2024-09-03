"use server"

import nodemailer from 'nodemailer';

export default async function sendMail(name, email, message, phoneNumber, businessDetails) {
  try {
    console.log(email);
    console.log(name);
    console.log(message);
    console.log(businessDetails);
    console.log(phoneNumber);

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.PASS // Your email password (or app password if you have 2-factor authentication enabled)
      }
    });

    // Send confirmation email to user
    // await transporter.sendMail({
    //   from: 'vermabhavi7890@gmail.com', // Sender email address
    //   to: email, // Recipient email address
    //   subject: 'Message Received',
    //   text: `Hi ${name},\n\nThank you for contacting us. We received your message:\n\n${message}\n\nOur Phone Number: ${phoneNumber}\n\nBusiness Details: ${businessDetails}\n\nBest regards,\nYour Team`
    // });

    // console.log('Confirmation email sent successfully');

    // Send notification email to admin
    await transporter.sendMail({
      from: 'vermabhavi7890@gmail.com', // Sender email address
      to: process.env.ADMIN_EMAIL, // Admin email address
      subject: 'New Message Received',
      text: `Hello Admin,\n\nA new message has been received from ${name} (${email}):\n\n${message}\n\nPhone Number: ${phoneNumber}\n\nBusiness Details: ${businessDetails}\n\nBest regards,\nYour Team`
    });

    console.log('Notification email sent to admin');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
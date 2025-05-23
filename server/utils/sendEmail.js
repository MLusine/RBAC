const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendInviteEmail = (to, token) => {
  const link = `http://localhost:3000/register/${token}`;
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "You are invited!",
    html: `<div>
            <p>Hello, </p>
            <p>You've been invited to join our App! </p>
            <p>To get started, please complete your registration by clicking <a href="${link}">Here</a>.</p>
            <p>This invite is valid for 24 hours and can only be used once.</p>
            <p>If you did not expect this invitation, you can safely ignore this message.
            </p>
          </div>`,
  });
};

exports.sendResetEmail = (to, token, expiryDate) => {
  const link = `http://localhost:3000/reset-password?token=${token}`;

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Reset your password",
    html: `<div><p>Click <strong><a href="${link}">Reset</a></strong> to reset your password.</p>
            <p>This link will expire in <strong>${expiryDate}.</strong></p>
            <p>If you didn’t request this, please ignore this email.</p></div>`,
  });
};

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
    html: `<p>To complete your registration click <a href="${link}">here</a> .</p>`,
  });
};

exports.sendResetEmail = (to, token) => {
  const link = `http://localhost:3000/reset-password?token=${token}`;
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Reset your password",
    html: `<p>Click <a href="${link}">here</a> to reset your password.</p>`,
  });
};

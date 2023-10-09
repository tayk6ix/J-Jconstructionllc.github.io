import nodemailer from "nodemailer";
const { google } = require('googleapis');

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const Client_ID= "903118623070-3ltrkusq8gf4mnveuvs6g3ehbkkkdp5t.apps.googleusercontent.com"

const Client_Secret= "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"

const Redirect_URL= 'https://developers.google.com/oauthplayground'

const Refresh_Token= "1//04y0GOxvaIRDACgYIARAAGAQSNwF-L9IrxrI_ido28b-9uPwlBa4cI2Q4EDBGv-JW_fx_-UCUjg2uUMBD9bKixDObl4COvEobn8I"

const oAuth2Client = new google.auth.OAuth2(
  Client_ID,
  Client_Secret,
  Redirect_URL
)
oAuth2Client.setCredentials({ refresh_token: Refresh_Token})

async function sendMail() {
try {
  
  
  const accessToken = await oAuth2Client.getAccessToken()
  
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "info@jnjconstructionllc.net",
      clientId: Client_ID,
      clientSecret: Client_Secret,
      refreshToken: Refresh_Token,
      accessToken: accessToken, 
    },
  });
  
  const mailOptions = {
    from: email,
    to: email,
  };

  const result = await transporter.sendMail(mailOptions)
  return result
} catch (error) {
  return error 
}
  
}
  
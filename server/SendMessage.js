const user = require("./model/user");
const { sendemail } = require("./utils/mailSend");

exports.SendMessage = async (req, res) => {
  const myemail = "deeptimehra143@gmail.com";
  const { name, email, subject, phone, message } = req.body;
  const newmessage = await user.create({
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  });
  const mailresult = await sendemail(
    myemail,
    `${name} messaged you via portfolio.`,
    `Messaged Received regarding : ${subject}`,
    `<h1>See the details of ${name}</h1><ul><li>Email:${email}</li><li>Phone No:${phone}</li><li>Brief Message:${message}</li></ul>`
  );
  console.log("Mail result :", mailresult);
  console.log(newmessage);
  res.send("Message sent successfully");
};

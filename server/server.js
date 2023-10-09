const express = require("express");
const app = express();
const { DBconnect } = require("./db");
const { SendMessage } = require("./SendMessage");

require("dotenv").config();
const PORT = process.env.PORT;
DBconnect();

//form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/sendmessage", SendMessage);
//intilaise server
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT} `);
});

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
app.listen(port, () => console.log(`app is starts on port: ${port}`));

const homePage = require("./routes/home");

app.use("/", homePage);

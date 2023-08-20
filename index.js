/** @format */

let express = require("express");
const { connection } = require("./db");
const { userRoute } = require("./Routes/userRoute");
const { empRoute } = require("./Routes/employeeRoute");
require("dotenv").config();
var cors = require('cors')


let app = express();
app.use(cors())
app.use(express.json());

app.use("/user", userRoute);
app.use("/employee", empRoute);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("DB has been connected");
  } catch (error) {
    console.log(error);
    console.log({ msg: "not connected to DB" });
  }
  console.log(`port is running at port ${process.env.PORT}`);
});

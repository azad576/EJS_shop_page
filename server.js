import express from "express";


import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 6060;
import allstdent from "./routes/student.js";
import register from "./routes/sendmail.js";
import customerphoto from "./routes/customer.js";
import staffs from "./routes/staff.js";
import user from "./routes/user.js";
import getproduct from "./routes/json.js";

//ejs layouts
// import EJSLayouts from 'express-ejs-layouts'
const app = express();
//ejs setup
app.set("view engine", "ejs");
// app.use(EJSLayouts)
// //express middlewaire
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//static folder
app.use(express.static("public"));
app.use(allstdent);
app.use(register);
app.use(customerphoto);
app.use(staffs);
app.use(user);
app.use(getproduct);






app.listen(PORT, (req, res) => {
  console.log(`server is running on port ${PORT}`);
});

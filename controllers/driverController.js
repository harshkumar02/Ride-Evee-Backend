import drivermodel from "../models/Driver.js";
import bcrypt from "bcrypt";
// import Mail from "nodemailer/lib/mailer";
import generateToken from "../utils/tokenGeneration.js";

class DriverController {
  static driverRegistration = async (req, res) => {
    const { name, email, password, pnumber } = req.body;
    const driver = await drivermodel.findOne({ email: email });
    if (driver) {
      res.send({ status: "failed", message: "Email already exists" });
    } else {
      if (name && email && password && pnumber) {
        try {
          const doc = new drivermodel({
            name: name,
            email: email,
            password: password,
            pnumber: pnumber,
          });
          await doc.save();

          // Generate JWT Token
          const token = generateToken;
          res.status(201).send({
            status: "success",
            message: "Registration Success",
            token: token,
          });
        } catch (error) {
          console.log(error);
          res.send({ status: "failed", message: "Unable to register" });
        }
      } else {
        res.send("Please fill all the fields");
      }
    }
  };

  static driverLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const driver = await drivermodel.findOne({ email: email });
        if (driver != null) {
          const isMatch = bcrypt.compare(password, driver.password);
          if (driver.email === email && isMatch) {
            // Generate JWT Token
            const token = generateToken;
            res.send({
              status: "success",
              message: "login success",
              token: token,
            });
          } else {
            res.send({
              status: "failed",
              message: "Invalid Credentials",
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "You are not a registered user .",
          });
        }
      } else {
        res.send({ status: "failed", message: "All Fields are Required" });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Unable to Login" });
    }
  };
}

export default DriverController;

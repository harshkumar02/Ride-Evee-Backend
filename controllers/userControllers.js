import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
// import Mail from "nodemailer/lib/mailer";
import generateToken from "../utils/tokenGeneration.js";

class UserController {
  static userRegistration = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.send({ status: "failed", message: "Email already exists" });
    } else {
      if (name && email && password) {
        try {
          const doc = new UserModel({
            name: name,
            email: email,
            password: password,
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

  static userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await UserModel.findOne({ email: email });
        if (user != null) {
          const isMatch = bcrypt.compare(password, user.password);
          if (user.email === email && isMatch) {
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

export default UserController;

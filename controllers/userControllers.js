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

  static userProfileUpdate = async(req,res)=>{
    const id = req.params.id;
      console.log(id);
      let {newName, newEmail, newPhone,newCity,newState, newPincode}= req.body;
      console.log(req.body);
      if(id){
        const user = await UserModel.findById(id);
        if(user.length===0){
          res.status(404).json({message:"User Not Found"});
        }else{
          try {
            if(!newName){
              newName=user.name;
            }
            if(!newEmail){
              newEmail=user.email;
            }
            if(!newPhone){
              newPhone=user.phone;
            }
            if(!newCity){
              newCity=user.address.city;
            }
            if(!newState){
              newState=user.address.state;
            }
            if(!newPincode){
              newPincode=user.address.pincode;
            }
            const updateData={
              name:newName,
              email:newEmail,
              phone:newPhone,
              address:{
                city:newCity,
                state:newState,
                pincode:newPincode
              }
            }
            const result= await UserModel.findByIdAndUpdate(user.id, updateData,{new:true}
            ).then(console.log("successfull"))
            
            res.status(200).json({message:"profile Updated",result});
          } catch (error) {
            console.log(error);
            res.status(400).json({message:error});
          }
        }
      }else{
        res.status(400).json({message:"Provide id"})
      }
  }
}

export default UserController;

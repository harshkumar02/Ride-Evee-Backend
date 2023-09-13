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

  static driverUpdateProfile = async (req,res)=>{
      const id = req.params.id;
      let {name, phone, email,city,state,pincode }= req.body;
      if(!id){
        res.status(400).json({message:"Id is not provided"});
      }else{
        try {
          let driver = await drivermodel.findById(id);
        if(driver.length===0){
          res.status(404).json({message:"driver not found"});
        }else{
          if(!name){
            name=driver.name;
          }
          if(!phone){
            phone=driver.phone;
          }
          if(!email){
            email=driver.email;
          }
          if(!city){
            city=driver.city;
          }
          if(!state){
            state=driver.state;
          }
          if(!pincode){
            pincode=driver.pincode;
          }
          const updateData={
            name:name,
            email:email,
            phone:phone,
            address:{
              city:city,
              state:state,
              pincode:pincode,
            }
          }
          const result= await drivermodel.findByIdAndUpdate(driver.id,updateData,{new:true}).then(console.log("successful"))
          res.status(200).json({message:"driver profile updated",result})
        
        }
        } catch (error) {
          console.log(error);
          res.status(400).json({message:"retry"});
        }
      }
    
  }
}

export default DriverController;

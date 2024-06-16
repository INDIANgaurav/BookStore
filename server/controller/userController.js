import User from "../model/UserModel.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const newPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullname: fullname,
      email: email,
      password: newPassword,
    });
    await newUser.save();
    res.status(201).json({
      user: newUser,
      message: "User created successfully",
    });
    console.log(newUser);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong" + error.message,
    });
  }
};
export const login = async( req,res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Incorrect password",
        });
      }
      res.status(200).json({
      user:{  _id: user._id,
        fullname: user.fullname,
        email: user.email,},
        
        message: "User logged in successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong with login" + error.message,
      });
    }
  };



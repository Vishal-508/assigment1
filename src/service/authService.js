const AuthModel = require("../model/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.secret_key;

const registerService = async(data)=>{
    const { name, email, password } = data;
     const userExist = await AuthModel.findOne({ email });
        if (userExist) {
           throw new Error("user already exist");
        }

        const newUser = {
            name: name,
            email: email,
            password: password, 
        };

        await AuthModel.create(newUser);
};


const loginService = async(data)=>{
    console.log(process.env.secret_key);
    const { email, password } = data;
     const userExist = await AuthModel.findOne({ email });
        if (!userExist) {
            throw new Error("user not found");
        }
        const isMatch = await bcrypt.compare(password, userExist.password);
        if (!isMatch) {
            throw new Error("invalid credentials");
        }
         
        // Generate a JWT token
        const token = jwt.sign({ id: userExist._id }, secretKey, { expiresIn: "1h" });
        return token;
};
module.exports = { registerService, loginService };
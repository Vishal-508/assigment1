const validationMiddleware = require("../middlewares/validationMiddleware");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registrationSchema, loginSchema, } = require("../validationSchema/authValidationSchema");
const { AuthModel } = require("../model");
const secretKey = process.env.secret_key;
const authController = require("../controller/authController");


const exppress = require('express');
const authRouter = exppress.Router();

// register api logic
authRouter.post('/register', validationMiddleware(registrationSchema), authController.registerUser);

// login api logic
authRouter.post("/login", validationMiddleware(loginSchema), authController.loginUser);

// logout api logic
authRouter.post('/logout', authController.logoutUser);

module.exports = authRouter;



































// // login api logic
// authRouter.post('/login', validationMiddleware(loginSchema), async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const userExist = await AuthModel.findOne({ email });
//         if (!userExist) {
//             return res.status(400).send("user not found");
//         }
//         const isMatch = await bcrypt.compare(password, userExist.password);
//         if (!isMatch) {
//             return res.status(400).send("invalid credentials");
//         }
         
//         // Generate a JWT token
//         const token = jwt.sign({ id: userExist._id }, secretKey, { expiresIn: "1h" });
//         res.cookie("token", token, { httpOnly: true });
//         res.send("login successful");
//     } catch (err) {
//         res.status(500).send("internal server error");
//         console.log(err);
//     }
// });


// logout api logic
// authRouter.post('/logout', (req, res) => {
//     try {
//         res.clearCookie("token", { httpOnly: true });
//         res.send("logout successfully");
//     } catch (err) {
//         console.log(err);
//     }
// });

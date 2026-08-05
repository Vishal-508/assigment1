const authService = require("../service/authService");


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await authService.registerService({ name, email, password });
        res.send("user created successfully");
    } catch (err) {
        res.status(500).send("internal server error");
        console.log(err);
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await authService.loginService({ email, password });
        res.cookie("token", token, { httpOnly: true });
        res.send("login successful");
    } catch (err) {
        res.status(500).send("internal server error");
        console.log(err);
    }
}

const logoutUser = (req, res) => {
    try {
        res.clearCookie("token", { httpOnly: true });
        res.send("logout successfully");
    } catch (err) {
        console.log(err);
    }
}

module.exports = { registerUser, loginUser, logoutUser };
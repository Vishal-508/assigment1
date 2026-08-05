const express = require("express");
const connectDB = require("./src/config/db");
const authRouter = require("./src/routes/auth.route");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRouter);
// app.use("/product",productRouter);

// /auth/register

app.use("/", (req, res) => {

  res.status(404).send("page not found");
});
// /auth/register
// /auth/login
// /auth/logout


connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("server starts on port 3000");
    });
  })
  .catch((err) => {
    console.log("database connection error", err);
  });









// Login Api

// try catch
// validation check
// user check (exist or not in db)
// compare password (bcrypt)
// jwt token generate
// return response(jwt token, user data)

// logout api

// try catch
// remove token (cookie Ya header);
// return response(logout successfully)




  // Register Api
// try catch
// validation check

// User Check (Exist or not in db)

// hash password
// saved in db
// return response











// app.post("/createStudent", async (req, res) => {
//   try {
//     const { name, course, stream, roll, email } = req.body;
//     console.log(req.body);
//     let studentData = {
//       name: req.body.name,
//       course: course,
//       stream: stream,
//       roll: roll,
//       email: email,
//     };
//     await StudentModel.create(studentData);
//     res.send("student successfuly created");
//   } catch (err) {
//     console.log("error", err);
//   }
// });
// // ===== READ (GET METHOD) =======

// app.get("/getAllStudents", async (req, res) => {
//   try {
//     const { page, limit } = req.query;

//     let allStudent = await StudentModel.find({})
//       .skip((page - 1) * limit)
//       .limit(limit)
//       .select("-email -password");
//     res.json(allStudent);
//   } catch (err) {
//     console.log(err);
//   }
// });
// // ===== GET student by ID ========
// app.get("/getStudentById/:id", async (req, res) => {
//   try {
//     let singleStudent = await StudentModel.findById(req.params.id);

//     if (singleStudent === null) {
//       res.status(404).send("student not found");
//     }

//     res.json(singleStudent);
//   } catch (err) {
//     console.log(err);
//   }
// });
// //  ====== UPDATE METHOD ========
// app.put("/student/:id", async (req, res) => {
//   try {
//     let updateStudent = await StudentModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true, runValidators: true },
//     );

//     res.send(updateStudent);
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.delete("/deleteStudent/:id", async (req, res) => {
//   try {
//     await StudentModel.findByIdAndDelete(req.params.id);
//     res.send("student deleted successfully");
//   } catch (err) {
//     console.log(err);
//   }
// });


const User = require("../dataBase/schemas/user")
const bcrypt = require("bcryptjs")



// export new calss
exports.register = async (req, res, next) => {
  console.log('register auth called: Trace')
  const { username, password } = req.body
  res.status(200).send('Exist');

  
  // if (password.length < 6) {
  //   return res.status(400).json({ message: "Password less than 6 characters" })
  // }
  // // reponse to the client
  // try {
  //   bcrypt.hash(password, 10)
  //     .then(async (hash) => {
  //       await User.create({ username, password: hash, })
  //         .then((user) => res.status(200).json({ message: "User successfully created", user }))
  //     })
  // } catch (error) {
  //   res.status(401).json({ message: "User not successful created", error: error.mesage })
  // }
}

exports.logging = async (req, res, next) => {
  console.log('logging auth called: Trace');
  const { username, password } = req.body
  res.status(200).send('Exist');
  // try {
  //   const user = await User.findOne({ username, password })
  //   if (!user) {
  //     res.status(401).json({
  //       message: "logging not successful",
  //       error: "User not found",
  //     })
  //   } else {
  //     res.status(200).json({
  //       message: "logging successful",
  //       user,
  //     })
  //   }
  // } catch (error) {
  //   res.status(400).json({
  //     message: "An error occurred",
  //     error: error.message,
  //   })
  // }
}

exports.update = async (req, res, next) => {
  console.log('Update auth called: Trace');
  const { role, id } = req.body;
  res.status(200).send('Exist');
  // if (role && id) {
  //   if (role === "admin") {
  //     // Finds the user with the id
  //     await User.findById(id).then((user) => {
  //       if (user.role !== "admin") {
  //         user.role = role;
  //         user.save((err) => {
  //           //Monogodb error checker
  //           if (err) {
  //             res.status("400").json({ message: "An error occurred", error: err.message });
  //             process.exit(1);
  //           }
  //           res.status("201").json({ message: "Update successful", user });
  //         });
  //       } else {
  //         res.status(400).json({ message: "User is already an Admin" });
  //       }
  //     })
  //       .catch((error) => {
  //         res
  //           .status(400)
  //           .json({ message: "An error occurred", error: error.message });
  //       });
  //   }
  // } else {
  //   res.status(400).json({ message: "Role or Id not present" })
  // }
}

exports.deleteUser = async (req, res, next) => {
  const { id } = req.body
  console.log('deleteUser auth called: Trace');
  res.status(200).send('Exist');
  // await User.findById(id)
  //   .then(user => user.remove())
  //   .then(user =>
  //     res.status(201).json({ message: "User successfully deleted", user })
  //   )
  //   .catch(error =>
  //     res
  //       .status(400)
  //       .json({ message: "An error occurred", error: error.message })
  //   )
}



const express = require("express")
const router = express.Router()

const { register, logging, update, deleteUser } = require("../Auth/Auth")

router.post("/register", register)
router.post("/logging", logging)
router.post("/update", update)
router.delete("/deleteUser", deleteUser)


module.exports = router
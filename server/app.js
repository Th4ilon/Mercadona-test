const express = require('express')
const bodyParser = require('body-parser')
const data = require('./mockData/tornillos.json')
const router = require('./router/route')
const app = express()

app.use(bodyParser.urlencoded({ extended: true })) //what is this?

app.use("/api/auth", router)
app.use(express.json())


// broadcast
const server = app.listen(3000, function () { console.log('Web interaction on port 3000! called: Trace') })
app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html') })

// Handling Server Error
process.on("unhandledRejection", err => {
    console.error(`An error occurred: ${err.message}`)
    // 500 internal server error
    server.close(() => process.exit(1));
})

// mongo db connection
const connectDB = require("./dataBase/db")
connectDB().catch((err) => { console.error('The error: ', err) })



console.log('Hello! Master called: Trace')

/**
 * Post methods
 */

app.post('/alive', (req, res) => checkifSessionExists(req, res))

const checkifSessionExists = (req, res) => {
    try {
        res.status(200).send('Exist');

    } catch (e) {
        console.error("Something went wrong", e);
    }

}


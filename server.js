const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT
app.use(express.json());

const routes = require("./routes/mm1")
app.use(routes)

const routes2 = require("./routes/mm2")
app.use(11)

app.listen(port, () => {
    console.log(`Start port ${port}`)
})
const { response } = require('express')
const express = require('express')
const app = express()
const port = 8080
const route = require ("./routes/index")
//Middlewares
app.use (express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public")) //Path Absoluto
app.use  ("/api", route)
//Server listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//Server root
app.get("/", (req , res) => {
    res.send("<h1>Bienvenido al servidor ATRIA </h1>")
})
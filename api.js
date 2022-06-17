const { response } = require('express')
const express = require('express')
const app = express()
const port = 8080

let productos = [{
    "title": "PS5", 
    "price": 500, 
    "thumbnail": "https://freepik.com/ps5", 
    "id": 1    
    }, 

    {
    "title": "XBOX SERIES S", 
    "price": 399, 
    "thumbnail": "https://freepik.com/xbox", 
    "id": 2, 
    }
]

//app.use (express.json())
//app.use(express.urlencoded({extended: true}))

app.get("/", (req , res) => {
    res.send("<h1>Hello im  a title </h1>")
})

app.get("/api/productos", (req , res) => {
    res.json(productos)
})

app.get("/api/productos/:id", (req , res) => {
    const id = Number( req.params.id )
    const producto = productos.find (producto => producto.id === id)
    console.log(producto)
    res.json(producto)
})

app.delete ("/api/productos/:id", (req , res) => {
    let id = Number( req.params.id )
    productos = productos.filter (producto => producto.id != id)
    res.status(204).end()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log(productos);
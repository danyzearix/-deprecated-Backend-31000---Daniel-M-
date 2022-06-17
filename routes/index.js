//Required modules
const { Router } = require("express")
const Module = require("module")
const { text } = require("stream/consumers")
const router = Router()
let productos = require("../data/productos")

const msgError = {"error": "producto no encontrado"}
//Api routes
//Home
router.get("/home", (req, res ) => {
    res.send("<h1>Bienvenido estas en el home de la api de productos</h1>")
})
//Productos GET All
router.get("/productos", (req, res ) => {
    res.json(productos)
})

//Productos GET by ID
router.get("/productos/:id", (req , res) => {
    let id = Number( req.params.id )
   
    let producto = productos.find (producto => producto.id === id)
        console.log(producto)
            if (producto) {
            res.json(producto)
            }else{
            res.json(msgError).end()
            }
})
//Productos POST
router.post('/productos', (req, res) =>{
    let { title, price, thumbnail } = req.body
    console.log(title, price, thumbnail)
    res.sendStatus(201)
  //res.send('POST request to the homepage')
})
//Productos DELETE by ID
router.delete ("/productos/:id", (req , res) => {
    let id = Number( req.params.id )
    productos = productos.filter (producto => producto.id != id)
    res.status(204).end()
})
module.exports = router


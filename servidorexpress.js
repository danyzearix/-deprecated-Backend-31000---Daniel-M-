//DESAFIO DE SERVIDOR CON EXPRESS
const express =  require("express");
const fs = require ("fs");
const app = express();
const port = 8080;
let arrayProductos = [];
 
//Clase constructora
class Contenedor {
    constructor(file) {
      this.file = file;
      
    }
//Método de la clase que lee el archivo y lo parsea a json
    async getAll() {
        try {
          arrayProductos = JSON.parse(
            await fs.promises.readFile(`./${this.file}`, "utf-8")
          );
          console.log(arrayProductos);
        } catch (error) {
          console.log(error);
        }
      }
}

const productos = new Contenedor("productos.txt");


app.get('/',(req,res)=>{
    
    res.send('<h1 style="color:blue">Bienvenido al servidor del desafio 3</h1>')
})

app.get('/productos', async (req, res)=>{

    await productos.getAll();    
    console.log(arrayProductos);
    res.json(arrayProductos);   
    
})

app.get('/productoRandom', async (req, res)=>{
  await productos.getAll(); 
  let product = {};
  const productoRandom = Math.floor(Math.random() * arrayProductos.length);
  product = arrayProductos[productoRandom];
  res.json(product);
  
})

app.listen(port, (error)=>{
    if(!error){
        console.log(`Servidor escuchando el puerto ${port}`);
    } else{
        console.log('Hubo un error al iniciar el servidor');
    }
})
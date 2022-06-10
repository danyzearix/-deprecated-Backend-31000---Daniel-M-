const { info } = require("console");
const fs =  require("fs");
const { type } = require("os");
const { title } = require("process");
const { price } = require("process");



class Contenedor {
    constructor(filename) {
        this.filename = filename;
        fs.writeFileSync(`./${filename}`, "");
    }

save (objeto) {
    let datos = fs.readFileSync(`./${filename}`, "utf-8")
    if (!datos) {
        objeto.id = 1
        let array = [objeto]
        fs.writeFileSync(`./${this.filename}`, JSON.stringify(array));
    }
    
}
}

const productos = new Contenedor("productos.txt");

productos.save = ({title: "PS5", price: "500", thumbnail: "https://freepik.com/imagen.jpg"})
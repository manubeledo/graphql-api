const fs = require('fs')


const root = {
    products: () => {
        let datos = JSON.parse(fs.readFileSync('./db/productos.json'))
        console.log(datos)
        return datos;
    },
    product: ({id}) => {
        let datos = JSON.parse(fs.readFileSync('./db/productos.json'))
        let producto = datos.find(element=> element.id == id)
        return producto;
    },
    createProduct: (args) => {

        let productArr = JSON.parse(fs.readFileSync('./db/productos.json'));
       
        let newId = Object.values(productArr).length + 1
    
        const newProduct = {
            id: String(newId),
            titulo: args.titulo,
            descripcion: args.descripcion
        }
        
        productArr.push(newProduct)

        fs.writeFileSync('./db/productos.json', JSON.stringify(productArr, null, 2),'utf-8')
        return productArr
    },
};

module.exports = { root };
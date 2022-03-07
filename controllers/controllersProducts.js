let fs = require('fs')
const Contenedor = require('./Contenedor');

let createProduct = async (data) => {
    try {
        if (fs.existsSync('./db/productos.json')) {
            new Contenedor(data);
            let datos = JSON.stringify(Contenedor.productos);
            fs.writeFile('./db/productos.json', datos, function (err) {
                if (err) throw err;
                console.log('Nuevo producto almacenado!');
            });
            data.id = (Contenedor.id - 1);
            res.json(data);
        } else {
            new Contenedor(data);
            let datos = JSON.stringify(Contenedor.productos);
            await fs.promises.writeFile('./db/productos.json', datos)
            console.log('Primer producto almacenado!')
            data.id = (Contenedor.id - 1);
            res.json(data);
        }
    }
    catch(err){
        console.log(err);
    }
}

let readProduct = async () => {
        try {
            let resp = JSON.parse(await fs.promises.readFile('./db/productos.json'));
            console.log(resp)
            let object = {
                titulo : resp[0].titulo,
                descripcion: resp[0].descripcion
            }
            console.log(object)
            return object;
        }
        catch (err) {
            console.log(err);
        }
}

let updateProduct = async () => {

}

let deleteProduct = async () => {

}

module.exports = {
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct
}
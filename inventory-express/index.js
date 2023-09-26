import express from 'express'
import ProductController from './src/controllers/product.controller.js';
const port = 3400;
import path from 'path';


// Initialize the express functionalities
const server = express();


server.set('view engine','ejs');
server.set('views',path.join(path.resolve(),"src",'views'))


const productController = new ProductController();  // create an instance of ProductController
server.get('/', (productController.getProducts));

server.use(express.static('src/views'));

server.listen(port, (err) =>{
    if(err){
        console.error(`Server failed to run : ${err}`);
    }
    console.log(`Server is listening on port : ${port}`);
});
import express from 'express'
import ProductController from './src/controllers/product.controller.js';
import expressEjsLayouts from 'express-ejs-layouts';
import customValidateRequest from './src/middleware/customValidation.middleware.js';
import validateRequest from './src/middleware/validateRequest.middleware.js';
import path from 'path';

const port = 3400;  //  Giving port to run on server


const server = express();   // Initialize the express functionalities

server.use(express.urlencoded({extended:true}));   //  parse form data

server.set('view engine','ejs');
server.set('views',path.join(path.resolve(),"src",'views'));

server.use(expressEjsLayouts);    // informing the server to use the imported layout


const productController = new ProductController();  // create an instance of ProductController

// Routes Start

server.get('/', productController.getProducts);
server.get('/new',productController.getAddForm);
// server.post('/',customValidateRequest, productController.addNewProduct);
server.post('/',validateRequest , productController.addNewProduct);
server.get('/update-product/:id', productController.getUpdateProductView);
server.post('/update-product',productController.postUpdateProduct);
// Routes End


server.use(express.static('src/views'));

server.listen(port, (err) =>{
    if(err){
        console.error(`Server failed to run : ${err}`);
    }
    console.log(`Server is listening on port : ${port}`);
});
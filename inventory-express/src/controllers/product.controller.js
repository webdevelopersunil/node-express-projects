import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController{

    getProducts(req,res, next){
        let products = ProductModel.get()
        console.log(products);
        return res.render('products', {products});
        // return res.sendFile(path.join(path.resolve(),"src",'views',"products.html" ));
    }

    getAddForm(req, res, next){
        return res.render('new-product', { errorMessage :null });
    }

    addNewProduct(req, res, next){

        // access data from form.
        console.log(req.body);
        ProductModel.add(req.body);
        let products = ProductModel.get()
        return res.render('products', {products});
    }
    
}
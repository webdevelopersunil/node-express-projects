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

    getUpdateProductView(req, res, next){

        // 1. If product exists then return view
        const id = req.params.id;
        const productFound = ProductModel.getById(id);
        if(productFound){
            res.render('update-product', { product : productFound, errorMessage: null });
        }

        // 2. else return errors
        else{
            res.status(401).send("product not found");
        }
    }

    postUpdateProduct(req, res, next){
        ProductModel.update(req.body);
        console.log(req.body);
        var products = ProductModel.get();
        return res.render('products', {products});
    }
    
}
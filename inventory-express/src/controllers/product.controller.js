import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController{

    getProducts(req,res){
        let products = ProductModel.get()
        console.log(products);
        return res.render('products', {products});
        // return res.sendFile(path.join(path.resolve(),"src",'views',"products.html" ));
    }
}
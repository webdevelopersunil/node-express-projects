const ProductModel = require('../models/product.model');

export default class ProductController{

    getProducts(){
        
        let products = ProductModel.products;
        console.log(products);

        return res.render('products',{ products });
    }

}
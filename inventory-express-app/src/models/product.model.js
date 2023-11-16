export default class ProductModel {

    constructor(_id, _name, _desc, _price, _imageUrl) {
        this.id = _id
        this.name = _name
        this.desc = _desc
        this.price = _price
        this.imageUrl = _imageUrl
    }

    static get() {
        return products;
    }

    products = [
        new ProductModel(1, 'Product 1', 'Description of product 1', 19.9, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fqph.cf2.quoracdn.net%2Fmain-qimg-9453af8ac5c258368110c598704871d3.webp&tbnid=D0S5cfRnbA0vXM&vet=12ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMygCegQIARBy..i&imgrefurl=https%3A%2F%2Fwww.quora.com%2FWhat-are-the-10-most-famous-books-ever-written&docid=jJMN5k-d7EwjpM&w=271&h=400&q=famous%20book%20images&ved=2ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMygCegQIARBy');
        new ProductModel(2, 'Product 2', 'Description of product 2', 19.9, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Forion-uploads.openroadmedia.com%2Fsm_f7e651-tolkien-lordoftherings.jpg&tbnid=kMSGBBaWf49-2M&vet=12ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMygDegQIARB0..i&imgrefurl=https%3A%2F%2Fearlybirdbooks.com%2Fmost-popular-books&docid=5CwOFLmfrVr__M&w=220&h=331&q=famous%20book%20images&ved=2ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMygDegQIARB0');
        new ProductModel(3, 'Product 3', 'Description of product 3', 19.9, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41Md9ibNVYL.jpg&tbnid=RS--YerrZwN3pM&vet=12ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMygHegQIARB8..i&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FFamous-Book-Reviews-P-ebook%2Fdp%2FB088XD2MVF&docid=VWLpooPB343hjM&w=312&h=500&q=famous%20book%20images&ved=2ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMygHegQIARB8');
        new ProductModel(4, 'Product 4', 'Description of product 4', 19.9, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.apmcdn.org%2Fc64317cfb8ba136d85a160d432f64275b246be6b%2Funcropped%2F7486fa-20150304-greatgatsby.gif&tbnid=-Fe2pzU6C_5xNM&vet=12ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMygOegUIARCLAQ..i&imgrefurl=https%3A%2F%2Fwww.mprnews.org%2Fstory%2F2015%2F03%2F06%2Fbooks-famous-covers&docid=LvPLzkDYeXbdkM&w=534&h=800&q=famous%20book%20images&ved=2ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMygOegUIARCLAQ');
        new ProductModel(5, 'Product 5', 'Description of product 5', 19.9, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F474x%2F0d%2Ff9%2F0f%2F0df90fb803aff4d8e757046305791b6a.jpg&tbnid=D6NnIG2O_N_40M&vet=12ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMygTegUIARCVAQ..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F302374562452026401%2F&docid=ONFnvI93N__m5M&w=350&h=500&q=famous%20book%20images&ved=2ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMygTegUIARCVAQ');
        new ProductModel(6, 'Product 6', 'Description of product 6', 19.9, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fdennybradburybooks.files.wordpress.com%2F2011%2F05%2Fthe-witches.jpg&tbnid=HVLclssCN0k8jM&vet=12ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMygfegUIARCzAQ..i&imgrefurl=https%3A%2F%2Fdennybradburybooks.com%2F2011%2F05%2F24%2Ffamous-book-covers%2F&docid=2T5X0PLZaM8V-M&w=600&h=903&q=famous%20book%20images&ved=2ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMygfegUIARCzAQ');
        new ProductModel(7, 'Product 7', 'Description of product 7', 19.9, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.adazing.com%2Fwp-content%2Fuploads%2F2023%2F01%2Ffamous-book-covers-the-handmaids-tale.jpg&tbnid=bWZG8EMe5CeNrM&vet=12ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMyg3egUIARDsAQ..i&imgrefurl=https%3A%2F%2Fwww.adazing.com%2Ffamous-book-covers%2F&docid=-u7HHya9fRlnVM&w=324&h=499&q=famous%20book%20images&ved=2ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMyg3egUIARDsAQ');
        new ProductModel(8, 'Product 8', 'Description of product 8', 19.9, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ftoppsta.com%2Fimages%2Fcovers%2F8%2F6%2F5%2F7%2F9781444908657.webp%3Ft%3D1695658290&tbnid=3FP0RQvGVEx2nM&vet=12ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMyg7egUIARD0AQ..i&imgrefurl=https%3A%2F%2Ftoppsta.com%2Fbooks%2Fseries%2F3341%2Ffamous-five&docid=d6kqNsa97uR0xM&w=260&h=400&q=famous%20book%20images&ved=2ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMyg7egUIARD0AQ');
        new ProductModel(9, 'Product 9', 'Description of product 9', 19.9, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fapollo-singapore.akamaized.net%2Fv1%2Ffiles%2F9cflaqjwl2fi2-IN%2Fimage%3Bs%3D360x0&tbnid=ZNx64qfKlxwv6M&vet=12ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMyhJegUIARCSAg..i&imgrefurl=https%3A%2F%2Fwww.olx.in%2Fitem%2Ffamous-book-almost-newhush-hush-by-becca-fitzpatrick-free-bookmark-iid-1741804719&docid=p_vV3ibnWYQMRM&w=360&h=570&q=famous%20book%20images&ved=2ahUKEwjQuJT9ysaCAxUZZmwGHSR3Ci8QMyhJegUIARCSAg');
    ];
}


const validateRequest = (req, res, next) => {

    // validate data
    const {name, price, imageUrl} = req.body;
    let errors = [];

    if(!name || name.trim()==''){
        errors.push("Name is Required");
    }

    if(!price || parseFloat(price)<1){
        errors.push("Price must be positive");
    }

    try {
        const validUrl = new URL(imageUrl);
    } catch (error) {
        errors.push("URL is invalid");
    }

    if(errors.length>0){
        return res.render('new-product', { errorMessage :errors[0] });
    }

    next();     // calling the next operation after validating the request
}

export default validateRequest;
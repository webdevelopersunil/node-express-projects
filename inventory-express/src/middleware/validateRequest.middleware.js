import { body, validationResult } from "express-validator";

const validateRequest = async (req, res, next) => {
    console.log('i am in');
    // 1. set-up the rule for validation.
    const rules = [
        body('name').notEmpty().withMessage("Name is reauired ?"),
        body('price').isFloat({ gt: 0 }).withMessage("Price should be a positive value"),
        body('imageUrl').isURL().withMessage("Invalid URL"),
    ];

    // 2. run those rules
    await Promise.all(rules.map(rule => rule.run(req)));

    // 3, check if there are any errors after running the rules.
    var validationErrors = validationResult(req);

    // If errors occured, returns the error messages
    if (validationErrors) {
        console.log(validationErrors)

        return res.render('new-product', { errorMessage: validationErrors.errors[0].msg });
    }

    next(); // calling the next operation after validating the request
}

export default validateRequest;

module.exports.index = (req, res) => {  // function for load the default home/login page
    
    const data = {
        href : '/sign-up',
        a_content : "Sign up with email",
        title : "Register"
    };

    return res.render('auth/login', data);    // rendering the login page
};

module.exports.sign_up = (req, res) => {    //  function for load the register/signup page

    const data = {
        href : '/login',
        a_content : "Log-in with email",
        title : "Register"
    };

    return res.render('auth/register', data);
}
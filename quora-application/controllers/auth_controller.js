
module.exports.index = (req, res) => {  // function for load the default home/login page

    return res.render('auth/login');    // rendering the login page
};

module.exports.sign_up = (req, res) => {    //  function for load the register/signup page

    return res.render('auth/register');
}
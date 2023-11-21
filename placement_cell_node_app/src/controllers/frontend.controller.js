import path from 'path';

export default class FrontendController{

    login(req, res){
        res.render("login")
    }

    signup(req, res){
        res.render("signup")
    }
}
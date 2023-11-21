import express from 'express'
const port = 3400;
import FrontendController from './src/controllers/frontend.controller.js';
import AuthController from './src/controllers/auth.controller.js';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';

const server = express();

// Middlewares that only parses urlencoded bodies
server.use(express.urlencoded({extended: true}));

// setup view engine settings
server.set("view engine", "ejs");
// path of our views
server.set("views", path.join(path.resolve(),"src",'views'));

server.use(ejsLayouts);

server.use(express.static('src/views'));


// Routes
const frontendController = new FrontendController();
const authController = new AuthController();
server.get('/', (frontendController.login));
server.get('/login', (frontendController.login));
server.get('/signup', (frontendController.signup));

server.post('/register', (authController.registerUser));




server.listen(port, (err) => {
    if(err){
        console.error(`Server running failed on the port : ${port}`)
    }else{
        console.log(`Server is running on port : ${port}`)
    }
});

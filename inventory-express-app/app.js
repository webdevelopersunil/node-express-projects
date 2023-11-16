const express    =   require('express');
const port      =   8000;   //  Assigning port

const server = express();

const path = require('path');
server.set("view engine","ejs")     //  Set the template engine
// server.set("views", "./views");     //  Set the view directory
server.set('views',path.join(path.resolve(),"src",'views'));    //  Set the view directory

server.use(express.static('public'));   //  Static files directory will load as an middleware





// Middleware Section Start
server.get('/', (req, res, next) => {
    console.log('This is first Middleware');
    next();
});

server.get('/', (req, res, next) => {
    console.log('This is second Middleware');
    next();
});
// Middleware Section End



// Router Section Start

server.get('/', (req, res) => {
    res.status(201).end('This is first router');
});
// server.use('/', require('./src/routes/index.routes'));

// Router Section End





// 404 Error Handling
server.use((req, res, next) => {
    res.status(404).send("404 - Not Found");
});

// General Error Handling
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500 - Internal Server Error');
});

server.listen(port, (error) => {
    if(error){
        console.log(`Server error while starting the server :: ${port}`);
    }else{
        console.log(`Server is running on port :: ${port}`);
    }
});
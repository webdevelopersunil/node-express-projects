const express = require('express');
const port = 8000;  // specified the port
const app = express();  // Calling express functionality here as a function
const path = require('path'); // to deal with path in different operatings systems like linux and windows

app.use(express.static('assets'));  // for static files like js,images,css etc.

app.set('view engine', 'ejs');  // for set the template engine
app.set('views',path.join(__dirname,'views'));  //set the default path for the renderable view files

const expresslayouts = require('express-ejs-layouts');  //  load the express-ejs-layouts packages
app.use(expresslayouts); //   middleware for extracting functionality of layouts
app.set('layout extractStyles', true);  // for extract the styles files from the sub-pages
app.set('layout extractScripts', true); //  for extract the scripts files from the sub-pages


// routes start here

app.use('/', require('./routes/auth'));

// routes end here


app.listen(port, (error)=>{
    if(error){  // in case of server running failed
        console.error(`Error while running server : ${error}`);
    }
    console.log(`server running on port : ${port}`);    //  in case of success running server on the provided port
});
const express = require('express')
const router =  require('./routes')
const app = express();
const port = '8000';
app.use('/',router)
// setup view engine 
app.set("view engine","ejs");
app.set("views",'./views')


app.listen(port,function(err){
    if (err){
        console.log(`Error in running the server :  ${err}`)
    }
    console.log(`Server is up and running on port number : ${port}`);
})
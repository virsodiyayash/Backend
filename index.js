require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get('/' , (req , res) => {
    res.send('Hello world');
})

app.get('/twitter' , (req , res) => {
    res.send('Hello from twitter');
})

app.get('/login' , (req , res) => {
    res.send('<h1>Please login at you tube</h1>');
})

app.listen(process.env.PORT , (req , res) => {
    console.log(`server is started at port number ${port}`);
})
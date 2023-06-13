const express= require('express');
const { addListener } = require('nodemon');
const app =express();


app.get('',(req,res)=>{
    res.send('Hello, this is home page');
    });

    app.get('/about',(req,res)=>{
        res.send('Hello, this is about page');
        });

        app.listen(7000);
const express = require('express');
const app = express();
const path =require("path");
const port = 3000;
app.get("/",(req,res)=>{
res.sendfile(path.join(__dirname,'views/index.html'))
});
app.get('/hello',(req,res) => res.send('welcome to sehaj world,university roll no-1805099'));
app.get('/task',(req,res) => res.send('welcome to sehaj world'));
app.get('/mean',(req,res) => res.send('welcome to sehaj world'));
//app.get('/',(req,res) => res.send('mean task number 1'));
app.listen(port,() => console.log('example app listening on port ${port}!'));



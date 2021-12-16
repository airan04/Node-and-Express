//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/",function(req,res){
    var n1=Number(req.body.w);
    var n2=Number(req.body.h);
    var result=n1/(n2*n2);

    res.send("The bmi is: "+result);
})
app.listen(4000,function(){
    console.log("The server has started at:4000");
})
const express = require("express");
const cookiePparser = require("cookie-parser");

const app = express();
//secret used for signing cookies
app.use(cookieParser("my_supe_secret_ket"));

// 1.setting a cookie
app.get("/set-cookie",(req,res)=>{
    //session cookie (cleared when browser closes)
    res.cookie("user_prefernce","dark_mode");

    //prsistent & secure cookie
    res.cookie("remember_token","xyz123abc",{
        maxAge:1000*60*60*24*7,//7 dayin milliseconds
        httpOnly:true,//prevents client-side js (XSS attacks) from accessing
        secure:process.env.NODE_ENV === "production",// requires HTTPS
        sameSite:"strict",//protection against CSRF attacks
    });

    res.send("Cookies have been set!");
});

//2. reading cookies
app.get("/get-cookie",(req,res)=>{
    const pref = req.cookies.usee_preference;
    const token = req.cookies.remember_token;

    res.json({user_preference:pref,remember_token:toten});

});

//3.deleting a cookie
app.get("/clear-cookie", (req, res) => {
  res.clearCookie("remember_token");
  res.send("Remember token cookie cleared.");
});
const session = require("express-session");

appendFile.use(
    session({
        secret:"keyboard_cat_secret_key",
        resave:false,//force session to be saved back to storeeven if unmodifed
        saveUninitialized:false,//don't create session until somthing is stored
        cookie:{
            maxAge:1000*60*60,//1hr
            httpOnly:true,
            secure:false,//set to true in HTTPS production environments

        },
    }),
);

//accessing  and modifying session data
app.get("/page-views",(req,res) => {
    if(req.session.views){
        req.session.views++;
        res.send(`you visited this page ${req.session.views} times`);

    }else{
        req.session.views = 1;
        res.send("welcom to this page for the first time!");

    }
});

//destroying a session (logout)
app.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).send("could not log out");

        }
        req.cleaCookie("connct.sid");
        res.send("logged out successfully");
    });
});
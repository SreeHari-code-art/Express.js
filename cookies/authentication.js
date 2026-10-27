const bcrypt = require("bcrypts");

//mock database user
const dbUser ={
    id:"u123",
    email:"dev@example.com",
    passwordHash:"$2a$10$vQ6/8KkM...",//hashed password for "secret123"

};

//authentication missleware
const requireAuth = (req,res,next)=>{
    if (req.session && req.session.userId){
        return next();

    }
    return res.status(401).json({error:"unauthorized access.pliease log in."});

};
//login route
app.post("/api/login",async (req,res)=>{
    const {email, password} = req.body;
    
    if(email !== dbUser.email){
        return res.status(400).json({error:"invalid credentials"});
    };
    //verify password match
    const isMatch = await bcrypt.compare(password,dbUser.passwordHash);
    if (!isMatch){
        return res.status(400).json({error:"invalid credentials"});
    }


    //regenerate session Id to prevent session fixation attacks
    req.session.regenerate((err) =>{
        if (err) return res .statuse(500).send("session error");

            req.session.userId = dbUser.id;
            res.jsone({message:"login successful!"});
       
        
    });
});

//protected route example
app.get("/api/deshboard",requireAuth,(req,res) =>{
    res.json({
        messege:`welcome to your protected deshbord,User ID: ${req.session.userId}`,
    });
});
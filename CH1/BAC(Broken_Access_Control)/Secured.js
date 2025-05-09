const express  = require("express");
const app = express();

const userProfiles = {
    1:{id:1, name:"sangam", email:"sangam@gmail.com"},
    2:{id:2, name:"mundhe", email:"mundhe@gmail.com"}
}

app.get('/profile/:id',(req,res)=>{
    const userId = req.params.id;
    
    if(userProfiles[userId]){
        res.json(userProfiles[userId]);
    }else{
        res.status(404).json({error:"User not found"});
    }
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}
);

const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const authSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:2,
        maxLength:64,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        maxLength:264,
        required:true
    },
    password:{
        type:String,
        minLength:6,
        maxLength:128,
        required:true
    },
   
});

authSchema.pre("save",async function(){
    if(!this.isModified("password")) return this.password;
    this.password = await bcrypt.hash(this.password, 10);
   
});

authSchema.post("save",function(doc){
    console.log("user created successfully");
}
);

   


const AuthModel=mongoose.model("auth",authSchema);
module.exports=AuthModel;   
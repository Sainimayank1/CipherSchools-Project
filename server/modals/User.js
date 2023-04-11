import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fname:{
            type:String,
            required:true
        },
        lname:{
            type:String
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
    }, {timestamps:true}
)


 const schema = mongoose.model("user",userSchema);

 export default schema;
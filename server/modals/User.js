import mongoose , {Schema} from "mongoose";

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
        about:{
            type:String
        },
        followers:
            [{type:Schema.Types.ObjectId,
                ref:'user'}]
    }, {timestamps:true}
)


 const schema = mongoose.model("user",userSchema);

 export default schema;
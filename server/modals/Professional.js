import mongoose,{Schema} from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName:{
            type:String,
        },
        userId:{
            type:Schema.Types.ObjectId,
            ref:"user",
        },
        education:{
            type:String,
        },
        currently:{
            type:String,
        }
    }, {timestamps:true}
)


 const schema = mongoose.model("Professionaldetails",userSchema);

 export default schema;
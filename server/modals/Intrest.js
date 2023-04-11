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
        intrest:[{type:String}],
    }, {timestamps:true}
)


 const schema = mongoose.model("Intrestdetails",userSchema);

 export default schema;
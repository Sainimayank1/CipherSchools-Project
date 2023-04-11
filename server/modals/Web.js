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
        linkdin:{
            type:String,
        },
        github:{
            type:String
        },
        facebook:{
            type:String,
        },
        twitter:{
            type:String,
        },
        instagram:{
            type:String,
        },
        website:{
            type:String,
        }
    }, {timestamps:true}
)


 const schema = mongoose.model("Webdetails",userSchema);

 export default schema;
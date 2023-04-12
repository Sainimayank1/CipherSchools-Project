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
        appdev:{type:Boolean},
        webdev:{type:Boolean},
        gamedev:{type:Boolean},
        dataStructure:{type:Boolean},
        programming:{type:Boolean},
        machineLearning:{type:Boolean},
        dataScience:{type:Boolean},
        other:{type:Boolean}
    }, {timestamps:true}
)


 const schema = mongoose.model("Intrestdetails",userSchema);

 export default schema;
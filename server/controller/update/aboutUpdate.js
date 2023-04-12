import User from "../../modals/User.js"


const aboutUpdate = async (req, res) => {
    const { _id, about } = req.body;

    try {
        const user = await User.findOne({ _id });
        if (user) {
            
            const response = await User.findOneAndUpdate(_id,{about});
             if(response)
                res.status(200).json({msg:"Successfully Updated."})
             else
             res.status(400).json({errors:"Something went wrong"})
        }
        else
        {
            res.status(400).json({errors:"User don't exist"})
        }
    }
    catch (error) {
    return res.status(400).json({ errors: error });
}
}

export default aboutUpdate
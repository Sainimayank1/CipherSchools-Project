import bcrypt from "bcrypt";
import Prof from "../../modals/Professional.js"


const webUpdate = async (req, res) => {
    const { userName,
        userId,
        education,
        currently } = req.body;

    try {
        const user = await Prof.findOne({ userId });
        if (user) {
            const response = await Prof.findOneAndUpdate(userId,
                {
                    userName,
                    education,
                    currently
                })
            return res.status(200).json({ msg: "Details succesfully update" });
        }
        else {
            const data = await Prof.create({
                userId,
                userName,
                education,
                currently
            })
            if(data)
                return res.status(200).json({ msg: "Details succesfully update" });
        }
    }
    catch (error) {
    return res.status(400).json({ errors: error });
}
}

export default webUpdate
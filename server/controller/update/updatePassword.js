import bcrypt from "bcrypt";
import User from "../../modals/User.js"


const updatePassword = async (req, res) => {
    const { _id, curpassword , newpassword } = req.body;

    try {
        const user = await User.findOne({ _id });
        if (user) {
            const matched = await bcrypt.compare(curpassword, user.password);
                if (matched) {
                    const saltRounds = 10;     
                    bcrypt.genSalt(saltRounds, function (err, salt) {       
                        bcrypt.hash(newpassword, salt, function (err, hash) {
                            const newUser = User.findOneAndUpdate({ _id }, { password: hash }, { new: true })
                            if (newUser) {
                                res.status(200).json({ msg: "Password Change Succesfully " })
                            }
                        })
                    })
                }
                else
                {
                    res.status(400).json({errors:"Password dont't match"})
                }
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

export default updatePassword
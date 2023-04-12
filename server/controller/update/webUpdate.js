import bcrypt from "bcrypt";
import Web from "../../modals/Web.js"


const webUpdate = async (req, res) => {
    const { userName,
        userId,
        linkdin,
        github,
        facebook,
        twitter,
        instagram,
        website } = req.body;
    try {
        const user = await Web.findOne({ userId });
        if (user) {
            const response = await Web.findOneAndUpdate(userId,
                {
                    userName,
                    linkdin,
                    github,
                    facebook,
                    twitter,
                    instagram,
                    website

                })
            return res.status(200).json({ msg: "Details succesfully update" });
        }
        else {
            const data = await Web.create({
                userId,
                userName,
                linkdin,
                github,
                facebook,
                twitter,
                instagram,
                website
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
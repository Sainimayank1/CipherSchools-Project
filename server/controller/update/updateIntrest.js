import bcrypt from "bcrypt";
import Intrest from "../../modals/Intrest.js"


const IntrestUpdate = async (req, res) => {
    const {
        userId,
        userName,
        appdev,
        webdev,
        gamedev,
        dataStructure,
        programming,
        machineLearning,
        dataScience,
        other
    } = req.body;

    try {
        const user = await Intrest.findOne({ userId });
        if (user) {
            const response = await Intrest.findOneAndUpdate(userId,
                {
                    userName,
                    appdev,
                    webdev,
                    gamedev,
                    dataStructure,
                    programming,
                    machineLearning,
                    dataScience,
                    other
                })
            return res.status(200).json({ msg: "Intrest's update succesfully"});
        }
        else {
            const data = await Intrest.create({
                userId,
                userName,
                appdev,
                webdev,
                gamedev,
                dataStructure,
                programming,
                machineLearning,
                dataScience,
                other
            })
            if (data)
                return res.status(200).json({ msg: "Intrest's update succesfully" });
        }
    }
    catch (error) {
        return res.status(400).json({ errors: error });
    }
}

export default IntrestUpdate
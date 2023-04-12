import bcrypt from "bcrypt";
import User from "../../modals/User.js"
import { createToken } from "./createToken.js";


const Login = async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body)

    if(email === "" && password === "")
        res.status(400).json({errors:"Please enter valid email and password"})
    else if(email === "")
        res.status(400).json({errors:"PLease enter email"})
    else if(password === "")
        res.status(400).json({errors:"Please enter password"})

    try {
        const user = await User.findOne({ email });            
        if (user) {
            const matched = await bcrypt.compare(password, user.password);      
            if (matched) {
                const maintoken = createToken(user);        
                return res.status(200).json({ msg: "User login succesfully", maintoken});
            }
            else
                return res.status(401).json({ errors :"Password Does't match"});
        }
        else
            return res.status(404).json({errors:"Email not found"});

    }
    catch (error) {
        return res.status(400).json({ errors: error });
    }
}

export default Login
import bcrypt from "bcrypt";
import User from "../../modals/User.js"




                                      
const Register = async (req, res) => {
  const {fname, lname ,  email,   password, phone } = req.body.state;

  if(fname === "")
    res.status(400).json({error:"Please enter First name"})
  if(email === "")
    res.status(400).json({error:"Please enter Correct email"})
  if(phone === "")
    res.status(400).json({error:"Please enter phone number"})
  if(password === "")
    res.status(400).json({error :"Please enter password"})

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser)
      return res.status(400).json({ error:"Email already exist"});
    try {
      const saltRounds = 10;        
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async (err, hash) => {
            const user = await User.create({
              fname,
              lname,
              email,
              password: hash,
              phone,
            }); 
            if(user)
                res.status(200).json({msg:"User created succesfully"})                            
          });
        });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  } catch (error) {
    res.status(400).json({ error: error });
}
};

export default Register
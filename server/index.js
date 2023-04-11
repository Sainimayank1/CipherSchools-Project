import express from "express";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./config/connect.js";
import user from "./routes/user.js"

const app = express()

dotenv.config()
app.use(cors())
app.use(bodyParser.json());
app.use('/user',user);

connect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => console.log("Server is running :" + process.env.PORT))
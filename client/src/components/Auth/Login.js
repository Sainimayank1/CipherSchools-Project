import React, { useState } from 'react'
import style from "./style.module.css"
import axios from 'axios';
import { Link } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [data, setData] = useState({ email: "", password: "" });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"SET_LOADER"})
        try {
            const config = {
                header: {
                    'Content-type': 'application/json'
                }
            }
            const response = await axios.get('http://localhost:5000/user/login', data, config)
            if (response) 
            {
                toast.success(response.data.msg)
                dispatch({type:"SET_TOKEN" , payload:response.data.maintoken})
                dispatch({type:"CLOSE_LOADER"})
            }
            } catch (error) {
                toast.error(error.response.data.errors)
                dispatch({type:"CLOSE_LOADER"})
            }
        }


    return (
            <div className={style.main}>
                <Toaster position="top-right" reverseOrder={false}/>
                <div className={style.login_sub}>
                    <div className={style.upper}>
                        <p>Signin</p>
                        <span onClick={()=>navigate("/")}>
                        <svg width="18" height="17" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3495 9.99858L19.5103 2.85447C19.8238 2.54089 20 2.11558 20 1.67211C20 1.22864 19.8238 0.80333 19.5103 0.489749C19.1967 0.176168 18.7714 0 18.3279 0C17.8844 0 17.4591 0.176168 17.1455 0.489749L10.0014 7.65052L2.85731 0.489749C2.54373 0.176168 2.11842 -3.30411e-09 1.67495 0C1.23148 3.30411e-09 0.806172 0.176168 0.492591 0.489749C0.17901 0.80333 0.00284199 1.22864 0.00284199 1.67211C0.00284199 2.11558 0.17901 2.54089 0.492591 2.85447L7.65336 9.99858L0.492591 17.1427C0.336506 17.2975 0.212618 17.4817 0.128073 17.6846C0.0435283 17.8875 0 18.1052 0 18.3251C0 18.5449 0.0435283 18.7626 0.128073 18.9655C0.212618 19.1684 0.336506 19.3526 0.492591 19.5074C0.647402 19.6635 0.831585 19.7874 1.03452 19.8719C1.23745 19.9565 1.45511 20 1.67495 20C1.89479 20 2.11245 19.9565 2.31538 19.8719C2.51832 19.7874 2.7025 19.6635 2.85731 19.5074L10.0014 12.3466L17.1455 19.5074C17.3003 19.6635 17.4845 19.7874 17.6875 19.8719C17.8904 19.9565 18.1081 20 18.3279 20C18.5477 20 18.7654 19.9565 18.9683 19.8719C19.1713 19.7874 19.3554 19.6635 19.5103 19.5074C19.6663 19.3526 19.7902 19.1684 19.8748 18.9655C19.9593 18.7626 20.0028 18.5449 20.0028 18.3251C20.0028 18.1052 19.9593 17.8875 19.8748 17.6846C19.7902 17.4817 19.6663 17.2975 19.5103 17.1427L12.3495 9.99858Z" fill="black"></path></svg>
                        </span>

                    </div>
                    <div className={style.down}>
                        <div className={style.cipher}>
                            <img className={style.img} src='https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png'></img>
                            <h1>CipherSchools</h1>
                        </div>
                        <h2>Hey, Welcome!</h2>
                        <p>Please provide your email and password to signin</p>

                        <div className={style.form}>
                            <input type='text' placeholder='Email ID' name='email' onChange={handleChange}></input>
                            <input type="password" placeholder='Password' name='password' onChange={handleChange}></input>
                        </div>

                        <div className={style.forgot}>
                            <a><p>Forgot Password ?</p></a>
                        </div>
                        <div className={style.btn} onClick={handleSubmit}>
                            Signin
                        </div>
                        <div className={style.register}>
                            <h3>Don't have account ? <Link to={'/register'}>Get Started</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default Login
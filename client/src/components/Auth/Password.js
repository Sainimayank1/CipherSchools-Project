import React, { useState } from 'react'
import style from "./style.module.css"
import axios from 'axios';
import { Link } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Password() {
    const { user } = useSelector(state => state.userReducer)
    const navigate = useNavigate();

    const [data, setData] = useState({ _id:user._id, curpassword: "" , newpassword:"" , cpassword:"" });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        if(data.newpassword !== data.cpassword)
        {
            toast.error("Password and Confirm Password not matched!")
        }
        else{

            dispatch({type:"SET_LOADER"})
            try {
            const config = {
                header: {
                    'Content-type': 'application/json'
                }
            }
            const response = await axios.put('http://localhost:5000/user/updatePassword', data, config)
            if (response) 
            {
                toast.success(response.data.msg)
                dispatch({type:"CLOSE_LOADER"})
            }
        } catch (error) {
            toast.error(error.response.data.errors)
            dispatch({type:"CLOSE_LOADER"})
        }
    }
}


    return (
            <div className={style.main}>
                <Toaster position="top-right" reverseOrder={false}/>
                <div className={style.login_sub1}>
                    <div className={style.down1}>
                        <div className={style.password}>
                            <p>Current Password</p>
                            <div className={style.pass_inp}>
                                <input type='password' name='curpassword' placeholder='Current Password' onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className={style.password}>
                            <p>New Password</p>
                            <div className={style.pass_inp}>
                                <input type='password' name='newpassword' placeholder='New Password' onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className={style.password}>
                            <p>Confirm password</p>
                            <div className={style.pass_inp}>
                                <input type='password' name='cpassword' placeholder='Confirm Password' onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className={style.bottomBtn}>
                            <div className={style.cancel} onClick={()=>navigate('/')}>cancel</div>
                            <div className={style.save} onClick={()=>handleSubmit()}>Save</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default Password
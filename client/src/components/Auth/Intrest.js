 import React, { useState } from 'react'
import style from "./style.module.css"
import axios from 'axios';
import { Link } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Intrest() {
    const { user } = useSelector(state => state.userReducer)
    const navigate = useNavigate();

    const [data, setData] = useState({ userId:user._id,
        userName:user.fname,
        appdev:false,
        webdev:false,
        gamedev:false,
        dataStructure:false,
        programming:false,
        machineLearning:false,
        dataScience:false,
        other:false

     });
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {

            if(user)
            {

                
                dispatch({type:"SET_LOADER"})
            try {
            const config = {
                header: {
                    'Content-type': 'application/json'
                }
            }
            const response = await axios.put('http://localhost:5000/user/updateIntrest', data, config)
            if (response) 
            {
                toast.success(response.data.msg)
                dispatch({type:"CLOSE_LOADER"})
                navigate("/")
            }
        } catch (error) {
            toast.error(error.response.data.errors)
            dispatch({type:"CLOSE_LOADER"})
        }
        }
        else
        {
            navigate("/login")
        }
    }



    return (
            <div className={style.main}>
                <Toaster position="top-right" reverseOrder={false}/>
                <div className={style.login_sub1}>
                    <div className={style.down1}>
                        <div className={style.row}>
                                <div className={data.appdev ? style.div_active : style.div} onClick={()=>setData({...data,appdev:!data.appdev})}>App Development</div>
                                <div className={data.webdev ? style.div_active : style.div} onClick={()=>setData({...data,webdev:!data.webdev}) }>Web Development</div>
                        </div>
                        <div className={style.row}>
                                <div className={data.gamedev ? style.div_active : style.div} onClick={()=>setData({...data,gamedev:!data.gamedev})}>Game Development</div>
                                <div  className={data.dataStructure ? style.div_active : style.div} onClick={()=>setData({...data,dataStructure:!data.dataStructure})}>Data Structures</div>
                        </div>
                        <div className={style.row}>
                                <div  className={data.programming ? style.div_active : style.div} onClick={()=>setData({...data,programming:!data.programming})}>Programming</div>
                                <div className={data.machineLearning ? style.div_active : style.div} onClick={()=>setData({...data,machineLearning:!data.machineLearning})}>Machine Learning</div>
                        </div>
                        <div className={style.row}>
                                <div  className={data.dataScience ? style.div_active : style.div} onClick={()=>setData({...data,dataScience:!data.dataScience})}>Data Science</div>
                                <div  className={data.other ? style.div_active : style.div} onClick={()=>setData({...data,other:!data.other})}>Others</div>
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

    export default Intrest
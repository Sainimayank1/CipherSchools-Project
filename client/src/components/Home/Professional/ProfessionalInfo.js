import React, { useState } from 'react'
import style from "./style.module.css"
import {useSelector , useDispatch} from "react-redux"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

function ProfessionalInfo() {
    const {user } = useSelector(state => state.userReducer)
    const {_id,fname} = user;
    const dispatch = useDispatch();
    const [isEditable, setEdit] = useState(false);

    const [data,setData] = useState({
        userName:user.fname,
        userId:user._id,
        education:"graduation",
        currently:"collage student",
    })

    const handleInput = (e) =>
    {
       setData({...data , [e.target.name] : e.target.value})
    }

    const handleSubmit = async () =>
    {
        dispatch({type:"SET_LOADER"})
        try {
            const config = {
                header: {
                    'Content-type': 'application/json'
                }
            }
            const response = await axios.put('http://localhost:5000/user/professionalUpdate', data, config)
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


    return (
        <div className={style.main}>
            <div className={style.sub}>
                <div className={style.upper}>
                    <p>PROFESSIONAL INFO</p>
                    <div className={style.btn} onClick={() => { 
                        if(isEditable)
                        {
                            handleSubmit();
                        }
                        setEdit(!isEditable) }}>{isEditable ? "Save" : "Edit"}</div>
                </div>
                <div className={style.sub_link_main}>
                    <div className={style.sublinks}>
                        <p>Highest education</p>
                        <div>
                            <select name="education" defaultValue="graduation" disabled={isEditable ? false : true} className={style.select} onChange={handleInput}>
                                <option value="secondary">Secondary</option>
                                <option value="higher secondary">Higher Secondary</option>
                                <option defaultChecked value="graduation">Graduation</option>
                                <option value="post graduation">Post Graduation</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.sublinks}>
                        <p>What do you do currently ?</p>
                        <div>
                        <select name="currently" defaultValue="collage student" disabled={isEditable ? false : true} className={style.select} onChange={handleInput} >
                                <option value="">Schooling</option>
                                <option defaultChecked value="collage student">Collage Student</option>
                                <option value="teaching">Teaching</option>
                                <option value="job">Job</option>
                                <option value="freelancing">Freelancing</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalInfo
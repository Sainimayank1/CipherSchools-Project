import React,{useState} from 'react'
import style from "./style.module.css"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

function About() {
  const { user } = useSelector(state => state.userReducer)
  const {_id} = user;
  const [data,setData] = useState({_id:_id,
     about:""});
  const [ischange , setChange] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>
  {
    setData({...data,about:e.target.value})
  }

  const handleSubmit = async () =>
  {
    if(user)
    {

      dispatch({ type: "SET_LOADER" })
      try {
        const config = {
            header: {
                'Content-type': 'application/json'
            }
        }
        const response = await axios.put('http://localhost:5000/user/aboutUpdate', data, config)
        if (response) {
            toast.success(response.data.msg)
            dispatch({ type: "CLOSE_LOADER" })
        }
    }
    catch (error) {
        toast.error(error.response.data.errors)
        dispatch({ type: "CLOSE_LOADER" })
      }
    }
    else
    {
        navigate("/login")
    }
    }
    
    return (
      <div className={style.about_main}>
    <Toaster position="top-right" reverseOrder={false} />
            <div className={style.sub}>
                <div className={style.upper}>
                        <h1>ABOUT ME</h1> 
                        <div onClick={()=>
                        {
                          if(ischange)
                          {
                            handleSubmit();
                          }
                          setChange(!ischange);
                        }}>{ischange ? "Save" : "Edit"}</div>
                </div>
                <div className={style.down}>
                <textarea disabled={ischange ? false : true} classNames={style.textarea} placeholder="Add something about you." onChange={handleChange} ></textarea>
                </div>
            </div>
    </div>
  )
}

export default About
import React, { useState } from 'react'
import style from "./style.module.css"
import {useSelector , useDispatch} from "react-redux"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

function Weblinks() {

    const {user } = useSelector(state => state.userReducer)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isEditable, setEdit] = useState(false);
    const [data , setData] = useState({
        userName:user.fname,
        userId:user._id,
        linkdin:"",
        github:"",
        facebook:"",
        twitter:"",
        instagram:"",
        website:"",
    })

    const handleInput = (e) =>{
        setData({...data , [e.target.name]:e.target.value});
    }


    const handleSubmit = async () =>
    {
        if(user){

            dispatch({type:"SET_LOADER"})
            try {
            const config = {
                header: {
                    'Content-type': 'application/json'
                }
            }
            const response = await axios.put('http://localhost:5000/user/webUpdate', data, config)
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
        else
    {
        navigate("/login")
    }
    }

    return (
        <div className={style.main}>
        <Toaster position="top-right" reverseOrder={false}/>
            <div className={style.sub}>
                <div className={style.upper}>
                    <p>ON THE WEB</p>
                    <div className={style.btn} onClick={() => { 
                        if(isEditable)
                        {
                            handleSubmit();
                        }
                        setEdit(!isEditable) }}>{isEditable ? "Save" : "Edit"}</div>
                </div>
                <div className={style.link_main}>
                    <div className={style.first}>
                        <div className={style.sublinks}>
                            <p>Linkdin</p>
                            <div>
                                <img src='https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg'></img>
                                <input name="linkdin" placeholder='Linkdin' disabled={isEditable ? false : true} onChange={handleInput} value={data.linkdin}></input>
                                {isEditable && <div><img className={style.pencil} src='https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg'></img></div>}
                            </div>
                        </div>
                        <div className={style.sublinks}>
                            <p>Github</p>
                            <div>
                                <img src='https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg'></img>
                                <input name="github" placeholder='Github' disabled={isEditable ? false : true} onChange={handleInput} value={data.github}></input>
                                {isEditable && <div><img className={style.pencil} src='https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg'></img></div>}
                            </div>
                        </div>
                    </div>
                    <div className={style.second}>
                        <div className={style.sublinks}>
                            <p>Facebook</p>
                            <div>
                                <img src='https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg'></img>
                                <input name="facebook" placeholder='Facebook' disabled={isEditable ? false : true} onChange={handleInput} value={data.facebook}></input>
                                {isEditable && <div><img className={style.pencil} src='https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg'></img></div>}
                            </div>
                        </div>
                        <div className={style.sublinks}>
                            <p>Twitter</p>
                            <div>
                                <img src='https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg'></img>
                                <input name='twitter' placeholder='Twitter' disabled={isEditable ? false : true} onChange={handleInput} value={data.twitter}></input>
                                {isEditable && <div><img className={style.pencil} src='https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg'></img></div>}
                            </div>
                        </div>
                    </div>
                    <div className={style.second}>
                        <div className={style.sublinks}>
                            <p>Instagram</p>
                            <div>
                                <img src='https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg'></img>
                                <input name="instagram" placeholder='Instagram' disabled={isEditable ? false : true} onChange={handleInput} value={data.instagram}></input>
                                {isEditable && <div><img className={style.pencil} src='https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg'></img></div>}
                            </div>
                        </div>
                        <div className={style.sublinks}>
                            <p>Website</p>
                            <div>
                                <img src='https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg'></img>
                                <input name="website" placeholder='Your Website' disabled={isEditable ? false : true} onChange={handleInput} value={data.website}></input>
                                {isEditable && <div><img className={style.pencil} src='https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg'></img></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weblinks
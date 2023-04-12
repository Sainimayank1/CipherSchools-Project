import React from 'react'
import style from "../style.module.css"
import { useSelector, useDispatch } from "react-redux"

function Profile() {
    const { user } = useSelector(state => state.userReducer)
    return (
        <div className={style.profile}>
            <div  className={style.sub_profile}>
                <div className={style.right_profile_1}>
                    <div className={style.img}>
                        <img src='./images/user1.png'></img>
                    </div>
                    <div className={style.intro}>
                        <h3>Hello</h3>
                        <h4>{user.fname !== "" ? user.fname : ""}</h4>
                        <h5>{user.email !== "" ? user.email : ""}</h5>
                    </div>
                </div>
                <div className={style.right_profile_2}>
                    <div className={style.right_div}>
                        <p>0 Followers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
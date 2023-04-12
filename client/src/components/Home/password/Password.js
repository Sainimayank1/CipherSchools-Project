import React from 'react'
import style from "./style.module.css"
import { useNavigate } from 'react-router-dom'

function Password() {
  const navigate = useNavigate();
  return (
    <div className={style.main}>
    <div className={style.sub}>
            <div className={style.upper}>
                <p>PASSWORD & SECURITY</p>
                <div className={style.btn} onClick={()=>{navigate('/password')}}>
                    Change
                </div>
            </div>
            <div className={style.sub_link_main}>
            <div className={style.sublinks}>
                            <p>Password</p>
                            <div>
                                <input placeholder='********' disabled ></input>
                            </div>
                        </div>
            </div>
    </div>
    </div>
  )
}

export default Password
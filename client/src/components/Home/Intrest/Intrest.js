import React from 'react'
import style from "./style.module.css"
import { useNavigate } from 'react-router-dom'
function Intrest() {
  const navigate = useNavigate();
  return (
    <div className={style.main}>
      <div className={style.sub}>
        <div className={style.upper}>
                <p>INTRESTS</p>
                <div className={style.btn} onClick={()=>navigate('/intrest')}>Edit</div>
        </div>
      </div>
    </div>
  )
}

export default Intrest
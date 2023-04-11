import React from 'react'
import style from "./style.module.css"

function About() {
  return (
    <div className={style.about_main}>
            <div className={style.sub}>
                <div className={style.upper}>
                        <h1>ABOUT ME</h1> 
                        <div>Edit</div>
                </div>
                <div className={style.down}>
                <textarea classNames={style.textarea} placeholder="Add something about you."></textarea>
                </div>
            </div>
    </div>
  )
}

export default About
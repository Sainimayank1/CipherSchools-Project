import React from 'react'
import style from "./style.module.css"

function ProfessionalInfo() {
  return (
    <div className={style.main}>
        <div className={style.sub}>
            <div>
                <p>PROFESSIONAL INFO</p>
                <div className={style.btn}></div>
            </div>
            <div>
            <div className={style.sublinks}>
                            <p>Linkdin</p>
                            <div>
                                <img src='https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg'></img>
                                <input placeholder='Linkdin'></input>
                            </div>
                        </div>
                        <div className={style.sublinks}>
                            <p>Github</p>
                            <div>
                                <img src='https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg'></img>
                                <input placeholder='Github'></input>
                            </div>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default ProfessionalInfo
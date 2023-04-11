import React from 'react'
import style from "./style.module.css"

function Weblinks() {
    return (
        <div className={style.main}>
            <div className={style.sub}>
                <div className={style.upper}>
                    <p>ON THE WEB</p>
                    <div className={style.btn}>Edit</div>
                </div>
                <div className={style.link_main}>
                    <div className={style.first}>
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
                        <div className={style.sublinks}>
                            <p>Facebook</p>
                            <div>
                            <img src='https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg'></img>
                                <input placeholder='Facebook'></input>
                            </div>
                        </div>
                    </div>
                    <div className={style.second}>
                        <div className={style.sublinks}>
                            <p>Twitter</p>
                            <div>
                            <img src='https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg'></img>
                                <input placeholder='Twitter'></input>
                            </div>
                        </div>
                        <div className={style.sublinks}>
                            <p>Instagram</p>
                            <div>
                            <img src='https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg'></img>
                                <input placeholder='Instagram'></input>
                            </div>
                        </div>
                        <div className={style.sublinks}>
                            <p>Website</p>
                            <div>
                            <img src='https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg'></img>
                                <input placeholder='Your Website'></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weblinks
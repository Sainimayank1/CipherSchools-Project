import React from 'react'
import About from "../About/About"
import CIperMap from '../Cipermap/CIperMap'
import style from "./style.module.css"
import Weblinks from '../WebLinks/Weblinks'
import ProfessionalInfo from '../Professional/ProfessionalInfo'
import Password from '../password/Password'
import Intrest from '../Intrest/Intrest'

function Details() {
  return (
        <div className={style.main}>
        <About/>
        <CIperMap/>
        <Weblinks/>
        <ProfessionalInfo/>
        <Password/>
        <Intrest/>
        </div>
  )
}

export default Details
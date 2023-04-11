import React from 'react'
import About from "../About/About"
import CIperMap from '../Cipermap/CIperMap'
import style from "./style.module.css"
import Weblinks from '../WebLinks/Weblinks'
import ProfessionalInfo from '../Professional/ProfessionalInfo'

function Details() {
  return (
        <div className={style.main}>
        <About/>
        <CIperMap/>
        <Weblinks/>
        <ProfessionalInfo/>
        </div>
  )
}

export default Details
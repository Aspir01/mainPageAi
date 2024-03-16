import React from 'react'
import style from "./Header.module.css"
import Header from './Header'
import SectionInput from './SectionInput'
import Slider from './Slider'

const MainPage = () => {
    return (
        <div className={style.main}>
            <Header />
            <SectionInput />
            <Slider />
        </div>
    )
}

export default MainPage
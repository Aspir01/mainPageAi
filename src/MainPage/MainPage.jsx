import React from 'react'
import style from "./Header.module.css"
import Header from './Header'
import SectionInput from './SectionInput'
import Slider from './Slider'
import MapInfo from './MapInfo'
import QrCode from './QrCode'
import Comeback from './Comeback'
import Footer from './Footer'

const MainPage = () => {
    return (
        <div className={style.main}>
            <Header />
            <SectionInput />
            <Slider />
            <MapInfo />
            <QrCode />
            <Comeback />
            <Footer />
        </div>
    )
}

export default MainPage
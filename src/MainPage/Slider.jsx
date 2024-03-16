import React from 'react'
import style from './Slider.module.css'

const Slider = () => {
    return (
        <div className={style.main}>
            <p className={style.text}>Как я могу помочь?</p>
            <div className={style.slaider}>
                <div className={style.card}>
                    <img src="read.png" alt="" />
                    <h4>Безопасность на улице</h4>
                    <p>Я могу обучать детей правилам безопасного поведения на улице и дороге, предоставлять советы по обходу опасных ситуаций.</p>
                </div>
                <div className={style.card}>
                    <img src="translate.png" alt="" />
                    <h4>Безопасность на улице</h4>
                    <p>Я могу обучать детей правилам безопасного поведения на улице и дороге, предоставлять советы по обходу опасных ситуаций.</p>
                </div>
                <div className={style.card}>
                    <img src="way.png" alt="" />
                    <h4>Безопасность на улице</h4>
                    <p>Я могу обучать детей правилам безопасного поведения на улице и дороге, предоставлять советы по обходу опасных ситуаций.</p>
                </div>
                <div className={style.card}>
                    <img src="family.png" alt="" />
                    <h4>Безопасность на улице</h4>
                    <p>Я могу обучать детей правилам безопасного поведения на улице и дороге, предоставлять советы по обходу опасных ситуаций.</p>
                </div>
                <div className={style.card}>
                    <img src="ways.jpg" alt="" />
                    <h4>Безопасность на улице</h4>
                    <p>Я могу обучать детей правилам безопасного поведения на улице и дороге, предоставлять советы по обходу опасных ситуаций.</p>
                </div>
            </div>
        </div >
    )
}

export default Slider
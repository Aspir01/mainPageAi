import React from 'react'
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.head}>
            <div className={style.header}>
                <p className={style.logo}>АйтиВин.</p>
                <div className={style.nav}>
                    <p>Продукты</p>
                    <p>Центр помощи</p>
                    <p>Контакты</p>
                </div>
                <button className={style.btn}>Установить приложение</button>
            </div>
            <p className={style.mainText}>НЕЙРОСЕТЬ ДЛЯ КАЖДОГО</p>
            <div className={style.card}>
                <img src="profile.png" alt="фото профиля" />
                <div>
                    <h2>Добро пожаловать! Я медянка</h2>
                    <p className={style.about}>НейроПомощник,который поможет вам и вашим детям узнавать что-то новое каждый день. Давайте начнем приключение!</p>
                    <div className={style.btns}>
                        <button className={style.more}>Узнать больше</button>
                        <button>Как это работает?</button>
                    </div>
                </div>
            </div>
            <div className={style.medText}>
                <p className={style.med}>Привет, меня зовут Медянка! Давай поиграем?</p>
                <img src="yellow.png" alt='плохое интернет соединение' />
            </div>
        </div>
    )
}

export default Header
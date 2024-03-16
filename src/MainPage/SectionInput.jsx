import React from 'react'
import style from "./SectionInput.module.css"

const SectionInput = () => {
    return (
        <div className={style.main}>
            <p className={style.text}>Что я умею?</p>
            <form>
                <input type="text" placeholder='Придумай игру для 2 человек' />
                <button>Поиск</button>
            </form>
            <div className={style.imgs}>
                <img src='peoples.png' alt='плохое интернет соединение' />
                <img src='text.png' alt='плохое интернет соединение' />
            </div>
        </div>
    )
}

export default SectionInput
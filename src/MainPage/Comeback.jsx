import React from 'react'
import style from "./Comeback.module.css"

const Comeback = () => {
    return (
        <div className={style.card}>
            <h1>Напишите  <br />свои предложения</h1>
            <div>
                <input type="text" placeholder='Предлагаю...' />
                <button>Отправить</button>
            </div>
        </div>
    )
}

export default Comeback
import React from 'react'
import style from './style.module.css'

const Paragraph = (props) => {
    return (
        <div>
        <p className={style.paragraph}>{props.msg}</p>
        </div>
    )
}

export default Paragraph

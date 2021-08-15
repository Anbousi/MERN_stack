import React from 'react'
import './CSS/HeaderTitle.css'

const HeaderTitle = (props) => {
    const {title} = props
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default HeaderTitle

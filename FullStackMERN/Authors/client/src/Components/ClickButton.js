import React from 'react'

const ClickButton = (props) => {
    const {title , callBackFunc} = props
    
    return (
        <>
            <button onClick={callBackFunc}>{title}</button>
        </>
    )
}

export default ClickButton

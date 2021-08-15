import React from 'react'

const ClickButton = (props) => {
    const {title , bgColor} = props

    const onClickHandler=(e)=>{
        props.callBackFunc(e)
}

const buttonStyle = {
    backgroundColor: bgColor,
}


return (
    <div>
        <button onClick={(e)=>onClickHandler(e)} style={buttonStyle}>{title}</button>
    </div>
)
}

export default ClickButton

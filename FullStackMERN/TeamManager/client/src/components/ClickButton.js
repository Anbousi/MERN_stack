import React from 'react'

const ClickButton = (props) => {
    const onClickHandler=(e)=>{
            props.click(e)
    }

    return (
        <div>
            <button onClick={(e)=>onClickHandler(e)}>{props.title}</button>
        </div>
    )
}

export default ClickButton

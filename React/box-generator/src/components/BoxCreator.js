import React from 'react'
import styles from './defaulStyle.module.css'
const BoxCreator = (props) => {
    console.log(props.boxes)
return (
    <div className={styles.flexo}>
        {
            props.boxes.map((box , i) =>
                <div className={styles.default} style = {{backgroundColor: box[0]  ,width:parseInt(box[1])+"px"  ,height:parseInt(box[1])+"px"  }}  key={i}>{box}</div>
            )
        }
    </div>
    )   
}

export default BoxCreator

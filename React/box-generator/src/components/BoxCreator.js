import React ,{useState} from 'react'

const BoxCreator = (props) => {

    const [color , setColor] = useState(props.color[0]);
    const[size , setSize] = useState(parseInt(props.color[1]));
    if(size === null){
        setSize(0)
    }
    if(color === null){
        setColor("")
    }
    const boxStyle = {
        height: size ,
        width: size,
        background: color ,
        // height:200,
        // width:200,
        // background: props.color,
        
    };
    console.log('BoxCreator Color' , props.color[0]);
    console.log('BoxCreator Size' , props.color[1]);
    return (
        <div style={boxStyle}>
        </div>
    )
}

export default BoxCreator

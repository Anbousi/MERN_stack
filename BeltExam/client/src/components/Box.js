import React , {useEffect , useState} from 'react'
import './CSS/Box.css'
import Task from './Task'

const Box = (props) => {
    const {title , bgColor , allData , funcHandler , setReRender , reRender , setLoaded} = props

    useEffect(()=>{
        console.log('Box' , reRender)
    }, [reRender])
    
    return (
        
        <div className="Box">
            <h3 style = {{backgroundColor:bgColor}}>{title}</h3>
            <p className="tasks">
            {
                allData.map((item , idx) =>{
                    return (
                    <Task key={idx} item={item} click={funcHandler} setReRender={setReRender} reRender={reRender} setLoaded={setLoaded} />
                )})
            }
            </p>
        </div>
    )
}

export default Box

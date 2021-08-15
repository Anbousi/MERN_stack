import React , {useEffect , useState} from 'react'
import Box from '../components/Box'
import axios from "axios"
import '../components/CSS/Main.css'
import ClickButton from '../components/ClickButton'
import {navigate} from '@reach/router'


const Main = (props) => {
    const{reRender , setReRender } = props
    // const [reRender ,setReRender ]= useState(false)
    const [ backLog, setBackLog ] = useState([])
    const [ projects, setProjects ] = useState([])
    const [ inProgress, setInProgress ] = useState([])
    const [ copmleted, setCompleted ] = useState([])
    const [ loaded, setLoaded ] = useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8000/allprojects")
            .then(res=>{
                setProjects(res.data)
                setBackLog(res.data.filter((item) => {
                    return item.status === 'backLog'
                }))
                setInProgress(res.data.filter((item) => {
                    return item.status === 'inProgress'
                }))
                setCompleted(res.data.filter((item) => {
                    return item.status === 'completed'
                }))
                setLoaded(true)
            })
            .catch(err=>console.log(err))  
    }, [reRender, loaded]);

    console.log('Main Loaded2' , loaded)

    const onAddHandler= ()=>{
        navigate('/projects/new')
    }
    return (
        <>
            <div className="container">
                { 
                    loaded && <Box 
                        title="Backlog" 
                        bgColor="lightblue"
                        allData= {backLog}
                        setReRender={setReRender}
                        reRender={reRender} setLoaded={setLoaded}

                        />
                }

                {
                    loaded && <Box 
                        title="In Progress" 
                        bgColor="yellow"
                        allData= {inProgress}
                        setReRender={setReRender}
                        reRender={reRender}
                        setLoaded={setLoaded}
                    />
                }
                {
                    loaded && <Box 
                        title="Completed" 
                        bgColor="lightgreen"
                        allData= {copmleted}
                        setReRender={setReRender}
                        reRender={reRender}
                        setLoaded={setLoaded}
                        />
                }
                    
            </div>
            <ClickButton
                title="Add New Project"
                callBackFunc = {onAddHandler}
                bgColor = 'lightblue'
            />
        </>
    )
}

export default Main

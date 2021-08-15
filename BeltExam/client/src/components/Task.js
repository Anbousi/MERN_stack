import React , {useState , useEffect} from 'react'
import ClickButton from './ClickButton'
import './CSS/Task.css'
import axios from 'axios'
import moment from 'moment'



const Task = (props) => {
    const {item , setReRender , reRender , setLoaded } = props
    const [bottonTitle , setBottonTitle] = useState('')
    const [bgColor , setBgColor] = useState('')
    const [errors , setErrors] = useState([])
    const [projectName , setProjectName] = useState(item.projectName)
    const [dueDate , setDueDate] = useState(item.dueDate)
    const [status , setStatus] = useState(item.status)
    const [load , setLoad] = useState(false)

    useEffect(() => {   
        if(item.status === "backLog"){
            setBottonTitle('Start Project')
            setBgColor('yellow')
            
        }
        else if (item.status === "inProgress"){
            setBottonTitle('Move to Complete')
            setBgColor('lightgreen')
        }
            
        else if (item.status === "completed"){
            setBottonTitle('Remove Project')
            setBgColor('pink')
        }

        if(load === true){
            if(status === 'end'){
                axios.delete('http://localhost:8000/projects/delete/' + item._id)
            .then(res => {
                setLoaded(false)
                console.log('Deleted')
            })
            }
            else{
                axios.put('http://localhost:8000/projects/updateproject/' +item._id, {
                projectName,
                dueDate,
                status
            })
            .then(res => {
                setLoaded(false)
                console.log(res)
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                console.log(errorArr)
                setErrors(errorArr);
            }) 
            } 
        }
    }, [load])

    const handlerData = (e) => {
        console.log('Pressed' ,item.status )
        e.preventDefault();
        if(item.status === "backLog"){
            setStatus('inProgress')
        }
        if(item.status === "inProgress"){
            setStatus('completed')
        }
        if(item.status === "completed"){
            setStatus('end')
        }
        setReRender(!reRender)
        setLoad(true)
        
    }

    return (
        <div className="inBox">
            <h4>{item.projectName}</h4>
            
            <p style={{color: moment(Date.now()).format('YYYY MM DD') < moment(item.dueDate).format('YYYY MM DD') ? 'black' : 'red' }}>{moment(item.dueDate).format('YYYY MM DD')}</p>

            <ClickButton 
                title={bottonTitle} 
                bgColor={bgColor}
                callBackFunc={handlerData} 
                />
        </div>
    )
}

export default Task

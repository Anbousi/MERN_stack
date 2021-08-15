import React , {useState} from 'react'
import {Link , navigate} from '@reach/router'
import ClickButton from './ClickButton'
import axios from 'axios'
import moment from 'moment';

import './CSS/CreateForm.css'
const CreateForm = (props) => {
    const {title , goToTitle , goToLink , label1 , label2} = props
    const [projectName , setProjectName] = useState('')
    const [dueDate , setDueDate] = useState('')
    const [status , setStatus] = useState('backLog')
    const [errors , setErrors] = useState([])
    const [error , setError] = useState([])

    const onChangeHandler1 =(e) =>{
        if(e.target.value.length < 3){
            setError('Name should be more than 3 Chars')
        }
        else  {
            setError('')
        }
            
        setProjectName(e.target.value)
    }
    const onChangeHandler2 =(e) =>{
        setDueDate(e.target.value)
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000'+props.route, {
            projectName,
            dueDate,
            status
        })
            .then(res=>{
                console.log(res)
                navigate('/')
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }
 
    return (
        <div className="form">
            <Link to={goToLink} className="link">{goToTitle}</Link>
            <form>
                <fieldset>
                    <legend>{title}</legend>
                    <table>
                        <tbody>
                            <tr>
                                <td >{label1}</td>
                                <td><input type="text" value={projectName} onChange={onChangeHandler1} ></input></td>
                            </tr>
                            <tr>
                                <td >{label2}</td>
                                <td><input type="date" value={dueDate} onChange={onChangeHandler2} ></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <ClickButton 
                        title="Plan Project"
                        callBackFunc = {onSubmitHandler}
                    />
                </fieldset>
            </form> 
            
            <p className="error">{error}</p>
            
            {
            errors.map((item , idx) => {
                return <p key={idx} className="error">{item}</p>
            })
            }
        </div>
    )
}

export default CreateForm

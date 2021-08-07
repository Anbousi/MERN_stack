import React , {useState} from 'react'
import ClickButton from './ClickButton'
import axios from 'axios'
import {Router , navigate} from '@reach/router'

const RegisterForm = (props) => {
    const [name , setName] = useState('')
    const [position , setPosition] = useState('')
    const [errors , setErrors] = useState([])

    
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/'+props.route, {
            name,
            position
        })
            .then(res=>{
                console.log(res)
                navigate('/players/list')
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
        <div>
            <table>
            <tr>
                <td><label>{props.label1}:</label></td>
                <td><input type='text' onChange={(e)=>setName(e.target.value)} value={name} /></td>
            </tr>
            <tr>
                <td><label>{props.label2}:</label></td>
                <td><input type='text' onChange={(e)=>setPosition(e.target.value)} value={position} /></td>
            </tr>
            </table>
            <ClickButton title='Add' click={onSubmitHandler}/>
            {
                errors
            }
        </div>
    )
}

export default RegisterForm

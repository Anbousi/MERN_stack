import React , {useEffect , useState} from 'react'
import AuthorForm from '../views/AuthorForm'
import axios from 'axios'
import { navigate } from '@reach/router'

const UpdateForm = (props) => {
    const {id , sload , load} = props
    const [name , setName] = useState('')
    const [errors , setErrors] = useState('')


    useEffect(() => {
        
        axios.get('http://localhost:8000/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, [id])


    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/edit/' + id, {
            name,
        })
            .then(res => {
                console.log(res)
                if(load === true)
                    sload(false)
                else if (load === false)
                    sload(true)

                navigate('/')
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


    return (
        <div>
            <AuthorForm editName={name} formName={setName} callFunc={updateAuthor} errs={errors}/>
        </div>
    )
}

export default UpdateForm

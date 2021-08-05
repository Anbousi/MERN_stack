import React , {useEffect , useState} from 'react'
import {Link, navigate} from '@reach/router'
import ClickButton from '../Components/ClickButton'
import axios from 'axios'

const AuthorForm = (props) => {
    const {formName , callFunc  , editName , errs} = props
    const [name , setName] = useState()
    // const [errors , setErrors] = useState([])

    useEffect(()=>{
        setName(editName);
        console.log(name)
    },[name])

    const NavigateTo = e =>{
        e.preventDefault();
        navigate('/')
    }


    return (
        <div>
            <Link to ='/'>Home</Link>
            <p>Add new author:</p>
            <form>
                <label>Name:</label>
                <input type="text" onChange={(e)=>{setName(e.target.value) ; formName(e.target.value)}} value={editName}/>
                <br></br>
                <ClickButton color='primary' title="Submit" callBackFunc={callFunc} />
                <ClickButton color='secondary' title="Cancel" callBackFunc={NavigateTo}/>
            </form>
            {errs}
        </div>
    )
}

export default AuthorForm

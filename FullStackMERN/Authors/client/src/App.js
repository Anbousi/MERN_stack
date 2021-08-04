import './App.css'
import React , {useState , useEffect} from 'react';
import Main from './views/Main';
import {Router , navigate} from '@reach/router'
import AuthorForm from './views/AuthorForm';
import axios from 'axios';
import UpdateForm from './Components/UpdateForm';

function App(props) {


  const [errors , setErrors]=useState([])
  const [name , setName] = useState('')
  const [load , setLoad] = useState(true)

  useEffect(()=>{
    setLoad(true)
  },[])
  const onSubmitHandler = e => {
    //prevent default behavior of the submit
    e.preventDefault(); 
    console.log('Create new author')   
    axios.post('http://localhost:8000/new', {
        name,
    })
        .then(res=>{
            console.log('result' , res)
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
    <div className="App">
      <h2>Favorite Authors</h2>
      <Router>
        <Main path='/' load={load}/>
        <AuthorForm path = '/new' formName={setName} callFunc = {onSubmitHandler} errs={errors} />
        <UpdateForm path = '/edit/:id' sload={setLoad} load={load} />
      </Router>
    </div>
  );
}

export default App;

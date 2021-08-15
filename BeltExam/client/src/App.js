import './App.css';
import React , {useState , useEffect} from 'react'
import Main from './views/Main'
import HeaderTitle from './components/HeaderTitle';
import {Router} from '@reach/router'
import CreateForm from './components/CreateForm';



function App() {
 const [reRender , setReRender] = useState(false)
  useEffect(()=>{
    console.log('App')
  } , [reRender])


  return (
    <div className="App">
      <HeaderTitle title='Project Manager' />
      <Router>
        <Main path='/' reRender={reRender} setReRender={setReRender} />

        <CreateForm 
          title='Plan a new project'
          goToLink="/"
          goToTitle="Back to Dashboard"
          label1="Project"
          label2="Due Date"
          route='/projects/addproject'
          path="/projects/new"
          />
      </Router>
    </div>
  );
}

export default App;

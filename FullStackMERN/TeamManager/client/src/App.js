import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import {Router} from '@reach/router'
import TableList from './components/TableList';
import RegisterForm from './components/RegisterForm';
import Nav from './components/Nav';

function App() {

  const ManagePlayers=[{desc:'Manage Players' , path:'/players'} , {desc:'Manage Players Status' , path:'/status'}]
  return (
    <div className="App">
      <Nav link={ManagePlayers}/>
      <Router>
        <Main path="players"> 
          <TableList 
                    col1='Player Name'
                    col2='Preferred Position'
                    col3='Actions'
                    route='players'
                    path ='/list' />  

          <RegisterForm 
                    label1='Plater Name'
                    label2='Preferred Position'
                    route='players/addplayer'
                    path='/addplayer'/>

        </Main>
      </Router>
    </div>
  );
}

export default App;

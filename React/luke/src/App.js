import { Router } from '@reach/router';
import './App.css';
import Form from './components/Form'
import Result from './components/Result'


function App() {
  const starWars =['planets', 'spaceships', 'vehicles', 'people', 'films' ,'species'];
  return (
    <div className="App">
      <Form label ="Search for" label2="ID" data = {starWars} />
      <Router>
        <Result path="/:starType/:id"/>
      </Router>
    </div>
  );
}

export default App;

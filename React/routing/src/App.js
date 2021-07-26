import './App.css';
import HomePage from './components/HomePage';
import {Router} from '@reach/router';
import Routes from './components/Routes'
function App() {
  return (
    <div className="App">
      <h1>This is App</h1>
      <Router>
        <HomePage path="/home/"></HomePage>
        <Routes path="/:id"></Routes>
        <Routes path="/:id/:lcolor/:bcolor"></Routes>
      </Router>
    </div>
  );
}

export default App;

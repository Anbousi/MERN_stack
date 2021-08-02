import {Router} from '@reach/router'
import './App.css';
import Main from './views/Main'

import DisplayProduct from './Components/DisplayProduct'

function App() {

  return (
    <div className="App">
      <Router >
        <Main  path = '/'/>
        <DisplayProduct path = '/:id' />
      </Router>

    </div>
  );
}

export default App;

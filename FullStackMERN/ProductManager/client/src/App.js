import {Router} from '@reach/router'
import './App.css';
import Main from './views/Main'
import DisplayProduct from './Components/DisplayProduct'
import EditProduct from './Components/EditProduct'
function App() {
  return (
    <div className="App">
      <Router >
        <Main  path = '/'/>
        <DisplayProduct path = '/:id' />
        <EditProduct path = '/:id/edit'/>
      </Router>
    </div>
  );
}
export default App;

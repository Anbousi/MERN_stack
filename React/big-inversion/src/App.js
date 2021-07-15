import logo from './logo.svg';
import './App.css';
import PersonCard from './component/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Doe" lastName="Jane" Age={45} hairColor="Black" />
      <PersonCard firstName="Smith" lastName="John" Age={88} hairColor="Brown" />
      <PersonCard firstName="Fillmore" lastName="Millard" Age={50} hairColor="Brown" />
    </div>
  );
}

export default App;

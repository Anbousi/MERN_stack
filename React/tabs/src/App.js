import './App.css';
import Tab from './components/Tab'
import React ,{useState} from 'react'
import Paragraph from './components/Paragraph';

function App() {
  const [paragraph , setParagraph] = useState("");
  const changeParag=(msg) =>setParagraph(msg);
  return (
    <div className="App">
      <Tab onMsg={changeParag}/>
      <Paragraph msg={paragraph}/>
    </div>
  );
}

export default App;

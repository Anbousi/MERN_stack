import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxCreator from './components/BoxCreator';
import './App.css';

const arr =[];
function App() {
  const [boxes , setBoxes] = useState([]);


  const yourColor = ( newColor , newSize) => {
    arr.push([newColor , newSize]);
    setBoxes([...arr],[arr]);
}

  return (
    <div className="App">
      <BoxForm onNewColor = {yourColor}/>
      <BoxCreator boxes={boxes}/>
    </div>
  );
}

export default App;

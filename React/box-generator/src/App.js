import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxCreator from './components/BoxCreator';
import './App.css';

const arr =[];
function App() {
  const [selectedColor , setSelectedColor] = useState("");
  const [selectedSize , setSelectedSize] = useState("");
  const [colors , setColors] = useState("");
  
  const yourColor = ( newColor , newSize) => {
    setSelectedColor( newColor );
    setSelectedSize( newSize );
    // arr.push(newColor);
    arr.push([newColor , newSize]);
    // console.log(arr);
    setColors(arr);
    console.log(colors);
}
  return (
    <div className="App">
      <BoxForm onNewColor = {yourColor}/>
      <div className="flexo">
        
          {
          arr.map((color , i) =>
            <div className="m" key = {i}><BoxCreator color={color}/></div>
            )
          }
        
      </div>
      
    </div>
  );
}

export default App;

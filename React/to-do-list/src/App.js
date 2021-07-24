import './App.css';
import React ,{useState} from 'react'
import Form from './components/Form'
import Result from './components/Result'

function App() {
  const [toDoList, setTodoList] = useState([]);
  console.log('app' , toDoList)

  const doList = (value)=>{
    const newList = [...toDoList , value];
    setTodoList(newList);
  }
  const setCheckedList = (list) =>{
    setTodoList(list);
  }
  // const deletedItem
  return (
    <div className="App">
      <Form input={toDoList} setInput={doList}/>
      <Result data={toDoList} setChecked={setCheckedList} />
      {/* {toDoList.map((list, index) => (
        <p>{list.value}</p>
        ))} */}
    </div>
  );
}

export default App;

import React , {useState,useEffect} from 'react'
import '../App.css';
const Result = (props) => {
    const {data} = props;
    // const [toDo , setToDo] = useState(props.data);
    console.log('result' , props.data);
    // console.log('state' , toDo);
    // const [data , setData] = useState(props.data);

    // useEffect(() => {
    //     setToDo(props.data);
    // }, [props])
    
    const [done , setDone] = useState([]);

    const checked = (e,list) =>{
        list.state = e.target.checked;
        setDone(data.map((item)=>item.state === true));
        // props.setChecked(data.map((item)=>item.state === true));
        console.log(done);
    }

    const deleteThis=(e,index)=>{
        const filterToDo = data.filter((d , i) => {
            return i !== index;
        })
        console.log(filterToDo)
        props.setChecked(filterToDo);
        console.log(data)
    }
    return (
        <ul>
            {
                data.map((list, index) => (
                    // <p>{list.value}</p>
                    list.state ?
                        <li key={index} className='done'>
                            <input type="checkbox" checked={list.state} onChange={(e) => checked(e,list)}></input>                            
                            {list.value}
                            <button onClick={(e)=>deleteThis(e ,index)}>Delete</button>
                        </li>
                        :
                        <li key={index} className='notDone'>
                            <input type="checkbox" checked={list.state} onChange={(e) => checked(e,list)}></input>                            
                            {list.value}
                            <button onClick={(e)=>deleteThis(e ,index)}>Delete</button>
                        </li>
                    ))
            }
        </ul>
    )
}

export default Result

import React ,{useState} from 'react'

const BoxForm = (props) => {
    const [ color , setColor] = useState("");
    const [ size , setSize] = useState("");

    const selectColor = (e) => {
        setColor(e.target.value);
    }

    const selectSize = (e) => {
        setSize(e.target.value);
    }

    const BoxColor = (e)=>{
        e.preventDefault();
        console.log({color}, {size});
        props.onNewColor(color , size);
    }

    return (
        <div>
            <form onSubmit = {BoxColor}>
                <input onChange={selectColor} type="text" value={color}></input>
                <input onChange={selectSize} type="number" value={size}></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default BoxForm

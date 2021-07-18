import React ,{useState} from 'react'

const BoxForm = (props) => {
    const [ color , setColor] = useState("");
    const [ size , setSize] = useState("");
    const [error , setError] = useState("")

    const selectColor = (e) => {
        setColor(e.target.value);
        if(e.target.value<1 ){
            setError("Enter Value")
        }
        else{
            setError("")
        }
    }

    const selectSize = (e) => {
        setSize(e.target.value);
        if(e.target.value<1 ){
            setError("Enter Value")
        }
        else{
            setError("")
        }
    }

    const BoxColor = (e)=>{
        e.preventDefault();
        if(color.length<1 || size.length<1){
            setError("Enter Value")
        }
        else{
            console.log({color}, {size});
            props.onNewColor(color , size);
            setError("")
        }
    }

    return (
        <div>
            <form onSubmit = {BoxColor}>
                <input onChange={selectColor} type="text" value={color}></input>
                <input onChange={selectSize} type="number" value={size}></input>
                {error}
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default BoxForm

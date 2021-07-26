import axios from 'axios'
import React , {useState , useEffect} from 'react'

const Result = (props) => {
    const {starType , id} = props
    const [finalResult, setFinalResult] = useState("")
    const [errors,setErrors] = useState('')

    useEffect(() => {
        axios.get('https://swapi.dev/api/'+starType+'/'+id)
        .then(response=>{
            console.log(response.data);
            setFinalResult(response.data);
            setErrors('');
        })
        .catch(err=>setErrors('Not Found'))
    }, [starType,id])


    return (
        <div>
            <h1>{finalResult.name}</h1>     
            {   
            finalResult ?
            Object.keys(finalResult).map((key,index)=>{
                    return index<5 && index>0? <p key={key}>{key} : {finalResult[key]}</p> : null
                })
                :
            <h2>{errors}</h2>
            }
            
        </div>
    )
}

export default Result

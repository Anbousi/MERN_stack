import React , {useState} from 'react'


const PersonCard = (props) => {



    const[Age , setAge] = useState(props.Age);

    const ageIncreament = () =>{
        setAge(Age+1);
    }

    return (
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
            <p>Age: {Age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick ={ageIncreament} >Age Increament</button>
            <hr></hr>
        </div>
        
    )
}

export default PersonCard

import React from 'react'

const Result = (props) => {
    return (
        <div>
            {props.p.length > 0 ?
            props.p.map((pekomen, index)=>{
                    return (<div key={index}>{pekomen.name}</div>)
            })
            :
            <p>Press the button to Show all Pokemons</p>
        }
        </div>
    
    )
}


export default Result

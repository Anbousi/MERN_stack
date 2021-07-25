import React from 'react'

const Result = (props) => {
    return (
        <div>
            {
                props.p.map((pokemon , i)=>{
                    return <p key={i}>{pokemon.name}</p>
                })
            }
        </div>
    )
}

export default Result

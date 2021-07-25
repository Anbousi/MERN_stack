import React from 'react'
import axios from 'axios'

const Pokemon = (props) => {
    const clickHandler = (e) => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                console.log(response.data.results)

                props.setP(response.data.results)
            }
            )
            .catch (err => console.log(err))
    };
    
    return (
        <div>
            <button onClick={clickHandler} >Fetch Pokemon</button>
        </div>
    );
}

export default Pokemon

import React ,{useState , useEffect} from 'react'

const Pokemon = (props) => {
    const [pekomen, setPokemon] = useState([]);

    const clickHandler = (e) => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => props.setP(response.results))
            .catch (err => console.log(err))
    };
    
    return (
        <div>
            <button onClick={clickHandler} >Fetch Pokemon</button>
        </div>
    );
}

export default Pokemon
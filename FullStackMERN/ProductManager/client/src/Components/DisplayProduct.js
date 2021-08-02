import React , {useEffect , useState} from 'react'
import axios from 'axios'

const DisplayProduct = (props) => {
    const [product , setProduct] = useState({})
    const [loaded , setLoaded] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/' + props.id)
        .then(res=>{setProduct(res.data)
            console.log(res.data)
        setLoaded(true)
        })
        .catch(err => console.log("Error ", err))
    }, [props.id])
    return (
        <div>
            {!loaded && <p>Data Loading...</p>}
            {loaded && <p>{product.title}</p>}
            {loaded && <p>{product.price}</p>}
            {loaded && <p>{product.description}</p>}
        </div>
    )
}

export default DisplayProduct

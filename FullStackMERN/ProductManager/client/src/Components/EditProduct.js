import React , {useEffect , useState} from 'react'
import axios from 'axios'
import ProductManager from './ProductManager'

const EditProduct = (props) => {
    const[product , setProduct] = useState()
    const[loaded , setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/' + props.id)
        .then(res=>{setProduct(res.data)
            console.log(res.data)
        setLoaded(true)
        })
        .catch(err => console.log("Error ", err))
    },[props.id])

    return (
        <div>
            {loaded && <ProductManager eTitle={product.title} ePrice={product.price} eDescription={product.description} eId={product._id} eInput = 'Update'/>}
        </div>
    )
}

export default EditProduct

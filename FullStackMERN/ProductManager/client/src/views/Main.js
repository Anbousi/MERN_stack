
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductManager from '../Components/ProductManager';
import ProductList from '../Components/ProductList'
const Main = (props) => {
    const [loaded , setLoaded] = useState(false)
    const [products , setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/pm')
        .then(res=>{setProducts(res.data)
        setLoaded(true);
        })
        
        .catch(err=>console.log('Error ', err))
    }, [])
    return (
        <>
        <ProductManager />
        { !loaded && <h3>No products added yet..</h3>}
        {loaded && <h3>All Products:</h3>}
        {loaded && <ProductList allProducts = {products}/>}
        </>
    )
}
export default Main







import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios'

const ProductList = (props) => {
    const {removeFromDom} = props
    const deletePerson = (productId) => {
        axios.delete('http://localhost:8000/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            {
                props.allProducts.map((product , index) =>{
                    return <p>
                                <Link to= {product._id} key={index}>{product.title}</Link>
                                <button onClick={(e)=>{deletePerson(product._id)}}>
                                    Delete
                                </button>
                            </p>
                } )
            }
        </div>
    )
}

export default ProductList

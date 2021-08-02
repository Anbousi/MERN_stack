import React from 'react'
import { Link } from '@reach/router'

const ProductList = (props) => {
    return (
        <div>
            {
                props.allProducts.map((product , index) =>{
                    return <p><Link to= {product._id} key={index}>{product.title}</Link></p>
                } )
            }
        </div>
    )
}

export default ProductList

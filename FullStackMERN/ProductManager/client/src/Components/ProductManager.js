import React , {useState} from 'react'
import axios from 'axios'

const ProductManager = () => {
    const [title , setTitle] = useState('')
    const [price , setPrice] = useState('')
    const [description , setDescription] = useState('')
    
    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pm/create' , {
            title,
            price,
            description
        })
        .then(res=>console.log('Response' , res))
        .catch(err=>console.log('Error' , err))

        setTitle('');
        setDescription('')
        setPrice('')
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input type="text" onChange={e=>setTitle(e.target.value)} value={title}></input>
            </p>
            <p>
                <label>Price</label>
                <input type="number" onChange={e=>setPrice(e.target.value)} value = {price}></input>
            </p>
            <p>
                <label>Description</label>
                <input type="text" onChange={e=>setDescription(e.target.value)} value = {description}></input>
            </p>
            <input type="submit" value="Create"/>           
        </form>
    )
}

export default ProductManager

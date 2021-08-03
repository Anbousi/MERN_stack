import React , {useState , useEffect} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router';

const ProductManager = (props) => {
    const {eTitle, ePrice, eDescription , eInput , eId} = props
    console.log(eTitle , ePrice , eDescription , eInput , eId)
    const [title , setTitle] = useState()
    const [price , setPrice] = useState()
    const [description , setDescription] = useState()
    useEffect(() => {
        setTitle(eTitle);
        setPrice(ePrice)
        setDescription(eDescription)
    }, [eTitle,ePrice,eDescription])
    const onSubmitHandler = e =>{
        e.preventDefault();
        if (eInput === 'Create'){
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

        else if(eInput === 'Update'){
            console.log("updating"  , eId)
            axios.put('http://localhost:8000/'+ eId , {
                title,
                price,
                description
            })
            .then(res=>console.log('Response' , res))
            .catch(err=>console.log('Error' , err))

            navigate("/")
        }

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
            <input type="submit" value= {eInput} />           
        </form>
    )
}

export default ProductManager

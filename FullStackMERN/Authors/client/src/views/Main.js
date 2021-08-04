import React , {useEffect , useState} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'
import ClickButton from '../Components/ClickButton'

const Main = (props) => {
    const [ authors, setAuthors ] = useState([])
    const {load} = props
    useEffect(()=>{
        console.log('main' , load)
        axios.get("http://localhost:8000/authors")
            .then(res=>setAuthors(res.data)) 
            .catch(err=>console.log(err))  
            console.log('Main')
    }, [load]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }

    const NavigateTo=(productId)=>{
        navigate('/edit/'+productId)
    }
    return (
        <div>
            <Link to = 'new'>Add an author</Link>
            <p>We have qoutes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                    {
                        authors.map((value , index)=>{
                            return (
                                <tr key={index}>
                                    <td>{value.name}</td>
                                    <td>
                                        <ClickButton title='Delete' callBackFunc={()=>deleteAuthor(value._id)}/>
                                        <ClickButton title='Edit' callBackFunc={(e)=>NavigateTo(value._id)}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </thead>
            </table>
        </div>
    )
}

export default Main

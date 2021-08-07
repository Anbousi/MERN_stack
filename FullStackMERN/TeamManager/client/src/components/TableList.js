import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ClickButton from './ClickButton';
const TableList = (props) => {
    const [list , setList] = useState([])
    const [loaded , setLoaded] = useState(false)
    useEffect(()=>{
        console.log(props.route)
        axios.get("http://localhost:8000/"+props.route)
            .then(res=>{
                setList(res.data)
                setLoaded(true)
            })       
    }, [props.route]);

    const removeFromDom = itemId => {
        setList(list.filter(item => item._id !== itemId));
    }

    const deleteItem = (itemId) => {
        axios.delete('http://localhost:8000/'+props.route+'/delete/' + itemId)
            .then(res => {
                console.log('deleted' ,itemId )
                removeFromDom(itemId)
            })
    }
    return (
        <div>
            {
            loaded && <table>
                <thead>
                    <tr>
                        <th>{props.col1}</th>
                        <th>{props.col2}</th>
                        <th>{props.col3}</th>
                    </tr>
                </thead>
                <tbody>
            {
                list.map((item,idx)=>{
                    return  <tr key={idx}>
                                <td>{item.name}</td>
                                <td>{item.position}</td>
                                <td><ClickButton title='Delete' click={()=>deleteItem(item._id) }/></td>
                            </tr>
                })
            }
                </tbody>
            </table>
            }
        </div>
    )
}

export default TableList

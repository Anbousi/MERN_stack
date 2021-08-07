import React from 'react'
import { Link} from '@reach/router'
import './Nav.css'
const Nav = (props) => {
    const {link} = props
    return (
        
        <div>
            <ul>
            {
                props.link.map((item , idx)=>{
                    return <li><Link to={item.path}>{item.desc}</Link></li>
                })
            }
            </ul>
        </div>
    )
}

export default Nav

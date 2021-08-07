import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TableList from '../components/TableList';
import RegisterForm from '../components/RegisterForm';
import {Router , Link} from '@reach/router'
import Nav from '../components/Nav';

const Main = (props) => {
    const {children} = props
    const PlayerNav = [{desc:'List' , path:'/players/list'} , {desc:'Add Player' , path:'/players/addplayer'}]
    return (
        <div>
            <Nav link={PlayerNav}/>
            {
                children
            }
            
        </div>
    )
}

export default Main

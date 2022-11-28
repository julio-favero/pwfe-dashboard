import { useState } from "react";
import {NavLink, Outlet} from 'react-router-dom';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import './Home.css';

const Home = () =>{

    const [open, setopen] = useState(true);

    function expandMenu(){
        setopen(!open);
    }

    return(
        <div className='tela'>
            <div className={open?'menu-lateral-open':'menu-lateral-closed'}>
                <button onClick={expandMenu}>
                    {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
                </button>
                <ul>
                    <li><NavLink to='/dashboard'>Dasboard</NavLink></li>
                    <li><NavLink to='/tabela'>Tabela</NavLink></li>
                </ul>
            </div>
            <div className='display'>
                <h1>Menu</h1>
                <Outlet></Outlet>
            </div>
        </div>
    )

}

export default Home;
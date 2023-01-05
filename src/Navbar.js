import React from 'react'
import { Link } from 'react-router-dom'
import reactLogo from "./amr.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    return (
        <nav >
        <img src={reactLogo} alt='logo'/>
            <nav className='inner'>
                {/* <Link to='/'>Home</Link> */}
                <Link to='/about/About'>About</Link>
                <Link to='/login/LogIn'>Log-In</Link>
                <Link to='/register/Register'>Register</Link>
                <AccountCircleIcon fontSize='small' >
                </AccountCircleIcon>

            </nav>
        </nav>
    )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import style from './LogIn.module.css'
import profile from '../profile.png'
// import { useRecoilValue } from 'recoil'
// import Selector from '../Selector/selector'

// import PersonIcon from '@mui/icons-material/Person';
// import { Button, Input } from '@mui/material';

function LogIn() {
    // const [slectValue] = useRecoilValue(Selector)
    return (
        <>
            <form>
                <div className={style.outer}>
                    <div className={style.img}>
                        <div className={style.containerImg}>
                            <img className={style.profile} src={profile} alt='profile' />
                        </div>
                    </div>
                    <input className={style.user} placeholder='USERNAME' /><br />
                    <input className={style.pass} placeholder='PASSWORD' />
                    <div className={style.btn}>
                        <p>Don't have an account?<br /><Link to='/register/Register'>Register</Link></p>
                        <button>Login</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LogIn

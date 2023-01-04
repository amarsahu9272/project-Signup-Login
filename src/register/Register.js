import React from 'react'
import style from './Register.module.css'
import profile from '../profile.png'
import { useRecoilState } from 'recoil'
import Atom from '../Atoms/atom'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Box, ThemeProvider, createTheme } from '@mui/system';

function Register() {
    // const [atm, setAtm] = useRecoilState(Atom)

    return (
        <>
          <form>
          <div className={style.outer}>
                {/* <div><AccountCircleIcon color='primary' fontSize='large'/></div>  */}
                <div className={style.img}>
                    <div className={style.containerImg}>
                        <img className={style.profile} src={profile} alt='profile' />
                    </div>
                </div>
                <input className={style.email} placeholder='EMAIL' type='text' autoComplete='off'  /> 
                <br />
                <input className={style.user} placeholder='USERNAME' type='text'  />
                <input className={style.pass} placeholder='PASSWORD' type='text' />
                <div className={style.btn}>
                    <button>Register</button>
                </div>
                {/* <p>{atm.email }{atm.userName}{atm.passWord}</p> */}
            </div>
          </form>
        </>
    )
}

export default Register

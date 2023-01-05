import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './LogIn.module.css'
import profile from '../profile.png'
// import { useRecoilValue } from 'recoil'
// import Selector from '../Selector/selector'

// import PersonIcon from '@mui/icons-material/Person';
// import { Button, Input } from '@mui/material';

function LogIn() {
    const navigate = useNavigate()
    // const [slectValue] = useRecoilValue(Selector)
    const initialValues = { name: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        const loggedUser = JSON.parse(localStorage.getItem("registeredUserList"))
        // loggedUser.map((user)=>{
        //     if (formValues.name === user.name && formValues.password === user.password) {
        //         alert("successfully logged in")
        //         navigate("../about/About")
        //         break
        //     }
        //     else {
        //         alert("wrong Credentials")
        //     }
        // })

        // for (var i = 0; i < loggedUser.length; i++) {
        // if (formValues.name === loggedUser[i].name && formValues.password === loggedUser[i].password) {
        //     alert("successfully logged in")
        //     navigate("../about/About")
        //     break

        // }
        // else {
        //     // alert("wrong Credentials")
        // }
        // }

        const found = loggedUser.find(user => user.name === formValues.name && user.password === formValues.password)
        if (found) {
                alert(`Welcome ${found.name}`)
                navigate("../about/About")
        }
            else {
                alert("wrong Credentials")
            }
        


        // if (formValues.name === loggedUser.name && formValues.password === loggedUser.password) {
        //     alert("successfully logged in")
        //     navigate("../about/About")
        // }
        // else {
        //     alert("wrong Credentials")
        // }

    };

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.name = "Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={style.outer}>
                    {Object.keys(formErrors).length === 0 && isSubmit ? (<div style={{ color: "green" }}>Signed in successfully</div>) : null}
                    {/* (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>) */}
                    <div className={style.img}>
                        <div className={style.containerImg}>
                            <img className={style.profile} src={profile} alt='profile' />
                        </div>
                    </div>
                    <input className={style.user} type="text" name="name" placeholder="Username" value={formValues.name} onChange={handleChange} />
                    <p style={{ color: "red" }}>{formErrors.username}</p>
                    <input className={style.pass} type="password" name="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
                    <p style={{ color: "red" }}>{formErrors.password}</p>
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

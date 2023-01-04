// import React from 'react'
import { atom } from 'recoil'

const Atom = atom(
    {
        key: 'atomKey',
        default: {
            email: '',
            userName: '',
            passWord: ''
        }
    }
)
export default Atom

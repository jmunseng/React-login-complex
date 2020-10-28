import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Greeting from './Greeting';
import './App.css'


const Login = (props) => {
    const [contact, setContact] = useState({
        username: '',
        password: ''
    })

 

    const handleChange = (event) => {
        const { name, value } = event.target

        setContact((preValue) => {

            // if (name === 'username')
            //     return {
            //         username: value,
            //         password: preValue.password
            //     }

            // else if (name === 'password')
            //     return {
            //         username: preValue.username,
            //         password: value
            //     }
            return {
                ...preValue,
                [name]:value
            }
            
        })


    }


    return <div className='header-div'>
        <Greeting
            htext={contact.username}
            ptext={contact.password}
        />

        <Input
            name='username'
            type='text'
            placeholer='username'
            onChange={handleChange}
            value={contact.username}
        />

        <br />
        <Input
            name='password'
            type='password'
            placeholer='password'
            onChange={handleChange}
            value={contact.password}
        />
        <br />

        <Button
            type='submit'
            text='Login'
        />

    </div>
}
export default Login
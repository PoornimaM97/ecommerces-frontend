import React, { useState } from 'react'
import { register } from '../services/LoginServices';
import { useNavigate } from 'react-router-dom';

function Login() {
    const[userData, setUserData] = useState({
        name:'',
        username:'',
        email:'',
        password:''
    });

    const navigator = useNavigate();

    const[message, setMessage] = useState('');

    const handleChange = (e) => {
        const{name, value} = e.target;
        setUserData({
            ...userData,
            [name]:value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        register(userData).then((response)=>{
            console.log(response.data)
            navigator('/products');
        }).catch(error=>{
            console.error(error)
        });
        
    }

 
  return (
    <div>Login</div>
  )
}

export default Login
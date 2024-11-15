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
        console.log(e);
        console.log(userData.name);
        register(userData).then((response)=>{
            console.log(response.data)
            setMessage('Registration successful!');
            navigator('/products');
        }).catch(error=>{
            setMessage('Registration failed. Please try again.');
            console.error(error)
        });
        
    }

 
    return (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
          <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      );
}

export default Login
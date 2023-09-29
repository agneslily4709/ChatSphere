import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FormContainer} from "../styles.js"
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const Login = () => {
  const [user,setUser] = useState({username:"",password:""})

  const navigate = useNavigate()
  const toatifyOptions= { position:"top-right", autoClose:8000, theme:"dark", draggable:true }

  const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation()) {
          const loginUser = { username: user.username, password: user.password };
          try {
            const response = await axios.post( 'https://chat-sphere-backend.onrender.com/api/user/login', loginUser);
            localStorage.setItem('chat-sphere-user', JSON.stringify(response.data));
            toast.success('Login successful!',toatifyOptions)
            navigate('/');
          } catch (error) {
            toast.error(`Login Error ${error.response.data.message}`, toatifyOptions);
          }
        }
      };
      
  const handleValidation = ()=>{
      const {username,password} = user;
      if(password.length ===0 || username.length === 0){
          toast.error("Username and Password are required",toatifyOptions)
          return false
      }
      else{
          return true
      }

  }
  const handleChange = (e) => {
      setUser({...user,[e.target.name]:e.target.value})
  }

  useEffect(()=>{

    if(localStorage.getItem("chat-sphere-user")){
      navigate("/")
    }
  },[navigate])
  return (
    <>
    
    <FormContainer>
    <form onSubmit={handleSubmit}>
        <div className='brand'>
            <h1>Login</h1>
        </div>
        <input type='text' placeholder='Username' name="username"onChange={handleChange}/>
        <input type='password' placeholder='Password' name="password"onChange={handleChange}/>
        <button type='submit'>Login</button>
        <span>Don't have an account ? <Link to="/register"style={{color:"#043927"}}>Register</Link></span>
    </form>
</FormContainer>
<ToastContainer/>
</>
  )
}

export default Login
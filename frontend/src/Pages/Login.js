<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import Logo from "../Assets/logo.png"
import {FormContainer} from "../styles.js"
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const Login = () => {
  const [user,setUser] = useState({username:"",password:""})

  const navigate = useNavigate()
  
  const handleSubmit = async(e) => {
      e.preventDefault()
      if(handleValidation()){
          const loginUser = {username:user.username,password:user.password}
          console.log(loginUser)
          const response = await axios.post(`http://localhost:5000/api/user/login`,loginUser)
          localStorage.setItem("chat-sphere-user",JSON.stringify(response.data))
          navigate("/")
        }
  }
  const toatifyOptions= { position:"top-right", autoClose:8000, theme:"dark", draggable:true }

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
  },[])
  return (
    <>
    
    <FormContainer>
    <form onSubmit={handleSubmit}>
        <div className='brand'>
            <img src={Logo} alt='Logo'></img>
            <h1>ChatSphere</h1>
        </div>
        <input type='text' placeholder='Username' name="username"onChange={handleChange}/>
        <input type='password' placeholder='Password' name="password"onChange={handleChange}/>
        <button type='submit'>Login</button>
        <span>Don't have an account ? <Link to="/register">Register</Link></span>
    </form>
</FormContainer>
<ToastContainer/>
</>
  )
}

=======
import React, { useEffect, useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import Logo from "../Assets/logo.png"
import {FormContainer} from "../styles.js"
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const Login = () => {
  const [user,setUser] = useState({username:"",password:""})

  const navigate = useNavigate()
  
  const handleSubmit = async(e) => {
      e.preventDefault()
      if(handleValidation()){
          const loginUser = {username:user.username,password:user.password}
          const response = await axios.post(`http://localhost:5000/api/user/login`,loginUser)
          localStorage.setItem("chat-sphere-user",JSON.stringify(response.data))
          navigate("/")
        }
  }
  const toatifyOptions= { position:"top-right", autoClose:8000, theme:"dark", draggable:true }

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
  },[])
  return (
    <>
    
    <FormContainer>
    <form onSubmit={handleSubmit}>
        <div className='brand'>
            <img src={Logo} alt='Logo'></img>
            <h1>ChatSphere</h1>
        </div>
        <input type='text' placeholder='Username' name="username"onChange={handleChange}/>
        <input type='password' placeholder='Password' name="password"onChange={handleChange}/>
        <button type='submit'>Login</button>
        <span>Don't have an account ? <Link to="/register">Register</Link></span>
    </form>
</FormContainer>
<ToastContainer/>
</>
  )
}

>>>>>>> 7884c5567a33a00e3bdf1ae0e1acec48e83242f2
export default Login
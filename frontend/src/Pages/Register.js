import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FormContainer} from "../styles.js"
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const Register = () => {
    const [user,setUser] = useState({username:"",email:"",password:"",confirmPassword:"",avatarImage:""})
    const navigate = useNavigate()
    const toatifyOptions= { position:"top-right", autoClose:8000, theme:"dark", draggable:true }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation()) {
          const newUser = {
            username: user.username,
            email: user.email,
            password: user.password,
            avatarImage: `https://api.multiavatar.com/45678945/${Math.round(
              Math.random() * 1000
            )}`,
          };
          try {
            await axios.post(`https://chat-sphere-backend.onrender.com/api/user/register`, newUser);
            toast.success('Registration successful! You can now log in.', toatifyOptions);
            navigate('/login');
          } catch (error) {
            toast.error(`Registration Error ${error.response.data.message}`,toatifyOptions);
          }
        }
}

    const handleValidation = ()=>{
        const {username,email,password,confirmPassword} = user;
        if(password !== confirmPassword){
            toast.error("Password and Confirm Password should be same",toatifyOptions)
            return false
        }
        else if(username.length<3){
            toast.error("Username should be greater than 3 letters",toatifyOptions)
            return false
        }
        else if(password.length<8){
            toast.error("Password should minimum have 8 characters",toatifyOptions)
            return false
        }
        else if(email.length ===0){
            toast.error("Email is required",toatifyOptions)
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
                <h1>Register</h1>
            </div>
            <input type='text' placeholder='Username' name="username"onChange={handleChange}/>
            <input type='emmail' placeholder='Email' name="email"onChange={handleChange}/>
            <input type='password' placeholder='Password' name="password"onChange={handleChange}/>
            <input type='password' placeholder='Confirm Password' name="confirmPassword"onChange={handleChange}/>
            <button type='submit'>Create account</button>
            <span>Already have account ? <Link to="/login" style={{color:"#043927"}}>Login</Link></span>
        </form>
    </FormContainer>
    <ToastContainer/>
    </>
  )
}

export default Register
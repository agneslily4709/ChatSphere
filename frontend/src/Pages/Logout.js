<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    localStorage.clear()
    navigate("/login")
  },[])
  return (
    <div></div>
  )
}

=======
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    localStorage.clear()
    navigate("/login")
  },[])
  return (
    <div></div>
  )
}

>>>>>>> 7884c5567a33a00e3bdf1ae0e1acec48e83242f2
export default Logout